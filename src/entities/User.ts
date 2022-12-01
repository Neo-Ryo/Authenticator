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
    temp_secret: {
        type: DataTypes.STRING,
    },
    secret: {
        type: DataTypes.STRING,
    },
});
