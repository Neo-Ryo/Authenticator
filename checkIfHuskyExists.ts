import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const boldAndRed = "\x1b[1m\x1b[91m";
const hidden = "\x1b[8m";

if (
    process.env.NODE_ENV !== "production" &&
    !fs.existsSync("./.husky/pre-commit") &&
    !fs.existsSync("./.husky/pre-push")
) {
    console.error(
        `${boldAndRed}Error: .husky/ directory or pre-commit file are missing, please run yarn husky:setup${hidden}`
    );
    process.exit(1);
}
