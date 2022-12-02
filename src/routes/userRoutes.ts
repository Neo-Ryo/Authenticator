import { Router } from "express";
import { User } from "../entities/User";
import { v4 } from "uuid";
import { sign, verify } from "jsonwebtoken";
import { config } from "dotenv";
import { totp, authenticator, hotp } from "otplib";
import { toDataURL } from "qrcode";

config();

export const userRouter = Router();
const { SECRET_TOTP } = process.env;

userRouter.post("/register/:neoid", async (req, res) => {
    const uuid = v4();
    try {
        const neoid = parseInt(req.params.neoid as string);
        const { uid } = req.body;
        // Create user in the database
        let user = await User.findOne({
            where: {
                neoId: neoid,
            },
        });
        if (user) {
            return res.status(400).json("User already exist");
        }
        // Create temporary secret until it it verified
        const secret = authenticator.generateSecret();
        const totp_url = `otpauth://totp/${uid}?secret=${secret}`;
        const code = await toDataURL(totp_url);
        user = await User.create({ neoId: neoid, directoryUid: uid, secret, totp_url });
        console.log({ uuid, secret: secret });
        // otpauth://totp/test?secret=secret
        // Send user id and base32 key to user
        res.status(200).json({ user, code });
        // res.status(200).json({ path: req.path });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Error generating secret key" });
    }
});

userRouter.get("/getqr/:neoid", async (req, res) => {
    try {
        const neoid = parseInt(req.params.neoid as string);
        const user = await User.findOne({
            where: {
                neoId: neoid,
            },
        });
        if (!user) {
            return res.status(400).json("User not found");
        }
        const parsedUser = JSON.parse(JSON.stringify(user));
        console.log(parsedUser);
        const code = await toDataURL(parsedUser.totp_url);

        // Send user id and base32 key to user
        res.status(200).json(code);
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
        const secret = user.secret;
        const code = authenticator.generate(secret);
        if (code === token) {
            res.status(200).json("verified");
        } else {
            res.status(200).json("Not allowed");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});
// userRouter.post("/validate");
