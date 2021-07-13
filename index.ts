import express, { Request, Response, NextFunction } from "express";
import morganMiddleware from "./src/utils/morganMiddleware";
import logger from "./src/utils/logger";
import helmet from "helmet";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./src/swagger/swagger.json";

dotenv.config();

const app = express();
app.use(helmet());
app.use(morganMiddleware);
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", `${process.env.FRONT_URL}`);
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(process.env.PORT, () => logger.info(`Server running on port:${process.env.PORT}...`));
