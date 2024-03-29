var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import nodemailer from "nodemailer";
const { google } = require("googleapis");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
function sendMail() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accessToken = yield oAuth2Client.getAccessToken();
            const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "metee.yingyong@kkumail.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,
                },
            });
            const mailOptions = {
                from: "Metee Yingyongwatthanakit 💌 <metee.yingyong@kkumail.com>",
                to: "metee.ying@gmail.com",
                subject: "Hello from Metee",
                text: "Hello from Metee Love you from my future self",
                html: "<h1>Hello from Metee Love you from my future self</h1>",
            };
            const result = transport.sendMail(mailOptions);
            return result;
        }
        catch (error) {
            return error;
        }
    });
}
sendMail()
    .then((result) => console.log(`Email sent... ${result}`))
    .catch((error) => console.log(error.message));
