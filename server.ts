import express from "express";
import morganMiddleware from "./src/utils/morganMiddleware";
import helmet from "helmet";
import cors from "cors";
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
app.use(cors());

app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/status", statusRouter);
