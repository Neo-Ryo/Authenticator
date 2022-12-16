import { app } from "./server";
import { config } from "dotenv";
import { User } from "./entities/User";
import { sequelizeInstance } from "./databaseInit";

config();

const { LOCAL_PORT, DB_NAME } = process.env;

(async () => {
    try {
        await sequelizeInstance.authenticate();
        // await User.sync({ force: true });
        app.listen(LOCAL_PORT || 9000, () => {
            console.log(`Database ${DB_NAME}, connected`);
            console.log(`Server running on port: ${LOCAL_PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
})();
