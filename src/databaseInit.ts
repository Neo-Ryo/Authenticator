import { Sequelize, Model, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
export const sequelizeInstance = new Sequelize(DB_NAME!, DB_USERNAME!, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
});
