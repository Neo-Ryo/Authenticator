import express from "express";

import morganMiddleware from "./src/utils/morganMiddleware";
import logger from "./src/utils/logger";

const app = express();
app.use(morganMiddleware);

const port = 3000;

// example batch of logger types
app.get("/logger", (_, res) => {
    logger.error("This is an error log");
    logger.warn("This is a warn log");
    logger.info("This is a info log");
    logger.http("This is a http log");
    logger.debug("This is a debug log");
    res.send("Hello world");
});

app.listen(port, () => logger.info(`Server running on port:${port}...`));
