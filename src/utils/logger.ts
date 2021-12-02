import winston from "winston";
import dotenv from "dotenv";

dotenv.config();

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

export const level = (environment?: string): string => {
    return environment === "development" ? "debug" : "warn";
};

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

const transports = [
    new winston.transports.Console({
        silent: process.argv.indexOf("--silent") >= 0 || process.env.NODE_ENV === "test",
    }),
    new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
    }),
    new winston.transports.File({ filename: "logs/all.log" }),
];

const Logger = winston.createLogger({
    level: level(process.env.NODE_ENV),
    levels,
    format,
    transports,
});

export default Logger;
