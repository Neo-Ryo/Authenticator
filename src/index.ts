import { app } from "./server";
import logger from "./utils/logger";
import { config } from "dotenv";
import { User } from "./entities/User";
import { sequelizeInstance } from "./databaseInit";

config();

const { LOCAL_PORT, DB_NAME } = process.env;

(async () => {
    try {
        await sequelizeInstance.authenticate();
        // await User.sync({ force: true });
        app.listen(LOCAL_PORT || 9000, () => {
            logger.info(`Database ${DB_NAME}, connected`);
            logger.info(`Server running on port: ${LOCAL_PORT}`);
        });
    } catch (error) {
        logger.error(error);
    }
})();
