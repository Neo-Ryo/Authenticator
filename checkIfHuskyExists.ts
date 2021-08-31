/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

if (process.env.NODE_ENV !== "production" && !fs.existsSync("./.husky/pre-commit"))
    throw new Error("Error: .husky directory or pre-commit file is missing, run yarn husky:setup");
