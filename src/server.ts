import express from "express";
import morganMiddleware from "./utils/morganMiddleware";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./swagger/swagger.json";
import { statusRouter } from "./routes/statusRoutes";

export const app = express();

dotenv.config();

app.use(cookieParser());
app.use(helmet());
app.use(morganMiddleware);
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
const localUrl = new URL(process.env.LOCAL_URL ?? "");
let corsOrigin;
if (localUrl.hostname.split(".").length > 2) {
    // we choose to allow all sources from parent domain
    // ex1: if LOCAL_URL = localhost, we won't do anything
    // ex2: if LOCAL_URL = neomanis.bzh, we still won't do anything, as we need a sub-domain
    // ex3: if LOCAL_URL = services.neomanis.bzh, all calls coming from neomanis.bzh and its subdomains will be allowed
    corsOrigin = new RegExp(localUrl.hostname.slice(localUrl.hostname.indexOf(".") + 1) + "(:[0-9]{3,4}){0,1}");
}
app.use(cors({ origin: corsOrigin ?? true, credentials: true }));

app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/status", statusRouter);
