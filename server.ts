import express, { Request, Response, NextFunction } from "express";
import morganMiddleware from "./src/utils/morganMiddleware";
import helmet from "helmet";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./src/swagger/swagger.json";
import { statusRouter } from "./src/routes/statusRoutes";

export const app = express();

dotenv.config();

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
app.use("/status", statusRouter);
