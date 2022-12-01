import { Router } from "express";
import { User } from "../entities/User";
import { v4 } from "uuid";
import { sign, verify } from "jsonwebtoken";
import { config } from "dotenv";
import { totp } from "otplib";

config();

export const userRouter = Router();
const { SECRET_TOTP } = process.env;

userRouter.post("/register/:neoid", async (req, res) => {
    const uuid = v4();
    try {
        const neoid = parseInt(req.params.neoid as string);
        const { uid } = req.body;
        // Create temporary secret until it it verified
        // const temp_secret = sign({ neoid }, SECRET_TOTP!, { algorithm: "HS256" });
        const temp_secret = totp.generate(SECRET_TOTP!);
        // Create user in the database
        let user = await User.findOne({
            where: {
                neoId: neoid,
            },
        });
        if (user) {
            return res.status(400).json("User already exist");
        }
        user = await User.create({ neoId: neoid, directoryUid: uid, temp_secret });
        console.log(user);

        console.log({ uuid, secret: temp_secret });

        // Send user id and base32 key to user
        res.status(200).json(user);
        // res.status(200).json({ path: req.path });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error generating secret key" });
    }
});

userRouter.post("/verify/:neoid", async (req, res) => {
    try {
        const { token } = req.body;
        const { neoid } = req.params;
        // Retrieve user from database
        const userFound = await User.findOne({
            where: {
                neoId: parseInt(neoid),
            },
        });
        if (!userFound) {
            throw Error();
        }
        const user = JSON.parse(JSON.stringify(userFound));
        console.log(user);
        const secret = user.temp_secret;
        verify(token, SECRET_TOTP!, async function (err: any, decoded: any) {
            if (err) {
                throw Error("Invalid token");
            }
            console.log(decoded); // bar
            await User.update({ secret }, { where: { neoId: neoid } });
            res.json({ verified: true });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});
// userRouter.post("/validate");
