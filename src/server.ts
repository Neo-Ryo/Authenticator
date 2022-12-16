import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes";

export const app = express();

dotenv.config();

app.use(cookieParser());
app.use(helmet());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(cors({ origin: true }));
app.get("/api", async (req, res) => {
    res.status(200).json({ message: "Welcome on Authenticator API." });
});
app.use("/api/user", userRouter);
