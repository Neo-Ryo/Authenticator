import express from "express";
import morganMiddleware from "./utils/morganMiddleware";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./swagger/swagger.json";
import { statusRouter } from "./routes/statusRoutes";

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
