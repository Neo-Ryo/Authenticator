import { app } from "./server";
import logger from "./utils/logger";
import https from "https";
import fs from "fs";
import { httpsAgent } from "./agent";
import { connectToRegisterService, ServiceName, updateActiveDependencies } from "@neomanis/neo-utilities";
import {
    activeOtherDependencies,
    activeRequiredDependencies,
    otherDependencies,
    requiredDependencies,
} from "./utils/dependencies";
import * as dotenv from "dotenv";

dotenv.config();

const { LOCAL_URL, LOCAL_PORT, REGISTER_URL, SERVICE_KEY, SERVICE_CRT, CA_CRT } = process.env;

(async () => {
    try {
        if (!LOCAL_URL || !LOCAL_PORT || !REGISTER_URL || !SERVICE_KEY || !SERVICE_CRT || !CA_CRT) {
            throw new Error("Missing environment variables");
        }
        https
            .createServer(
                {
                    cert: httpsAgent.options.cert,
                    key: httpsAgent.options.key,
                    ca: [fs.readFileSync(`./certificates/store/${CA_CRT}`)],
                    requestCert: true,
                    rejectUnauthorized: httpsAgent.options.rejectUnauthorized,
                },
                app
            )
            .listen(LOCAL_PORT, () => {
                logger.info(`Server running on port: ${LOCAL_PORT}`);
            });

        // will retry every 10 sec if connection to register service fails.
        const actualDependencies = await connectToRegisterService(
            ServiceName.ITSM_SERVICE,
            `${LOCAL_URL}`,
            requiredDependencies,
            otherDependencies,
            `${REGISTER_URL}/services`,
            httpsAgent
        );
        updateActiveDependencies(
            actualDependencies.requiredDependencies,
            activeRequiredDependencies,
            requiredDependencies,
            actualDependencies.otherDependencies,
            activeOtherDependencies,
            otherDependencies
        );
    } catch (error) {
        logger.error(error);
    }
})();
