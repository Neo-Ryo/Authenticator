import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../databaseInit";

export const User = sequelizeInstance.define("User", {
    // Model attributes are defined here
    // uuid: {
    //     primaryKey: true,
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    neoId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    directoryUid: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secret: {
        type: DataTypes.STRING,
    },
    totp_url: {
        type: DataTypes.STRING,
    },
});
