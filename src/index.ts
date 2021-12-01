// import { connectToRegisterService, ServiceName } from "@neomanis/register-utilities";
import { app } from "./server";
import logger from "./utils/logger";

import * as dotenv from "dotenv";
dotenv.config();

const { NODE_ENV, LOCAL_URL, LOCAL_PORT, REGISTER_URL } = process.env;

(async () => {
    try {
        if (NODE_ENV !== "test") {
            if (!LOCAL_URL || !LOCAL_PORT || !REGISTER_URL) {
                throw new Error("Missing environment variables");
            }
            app.listen(LOCAL_PORT, () => {
                logger.info(`Server running on port: ${LOCAL_PORT}`);
            });

            // will retry periodically if connection to register service fails.
            // TODO uncomment to be able to launch server
            // await connectToRegisterService(ServiceName.<your service name>, LOCAL_URL, [], `${REGISTER_URL}/services`);
        }
    } catch (error) {
        logger.error(error);
    }
})();
