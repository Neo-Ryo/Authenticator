import https from "https";
import fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

export const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    cert: fs.readFileSync(`./certificates/${process.env.SERVICE_CRT}`),
    key: fs.readFileSync(`./certificates/${process.env.SERVICE_KEY}`),
});
