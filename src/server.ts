import express from "express";
import morganMiddleware from "./utils/morganMiddleware";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { toDataURL } from "qrcode";
import { userRouter } from "./routes/userRoutes";

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
app.use(cors({ origin: true }));
app.get("/api", async (req, res) => {
    res.status(200).json({ message: "Welcome on Authenticator API." });

    // const code = await toDataURL("coucou");
    // res.status(200).json({ qrcode: code });
});
app.use("/api/user", userRouter);
