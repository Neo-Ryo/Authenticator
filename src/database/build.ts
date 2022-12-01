/* eslint-disable @typescript-eslint/no-var-requires */
const pgtools = require("pgtools");
const dotenv = require("dotenv");

dotenv.config();

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

const config = {
    user: DB_USERNAME,
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT,
};

export function createDb() {
    pgtools.createdb(config, DB_NAME, function (err: Error, res: Response) {
        if (err) {
            console.error(err);
            process.exit(-1);
        }
        console.log(res);
    });
}

createDb();
