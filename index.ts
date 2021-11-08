import { app } from "./server";
import logger from "./src/utils/logger";

app.listen(process.env.LOCAL_PORT, () => logger.info(`Server running on port:${process.env.LOCAL_PORT}...`));
