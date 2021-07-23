import { app } from "./server";
import logger from "./src/utils/logger";

app.listen(process.env.PORT, () => logger.info(`Server running on port:${process.env.PORT}...`));
