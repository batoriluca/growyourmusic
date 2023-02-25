// This file is for connect to DB 
import connectDB from "../../middleware/mongoose"
// This file is use for dump the data in db
import user from "../../models/user"
// var jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");
// var jwt = require('jsonwebtoken');
import nodemailer from "nodemailer";

var jwt = require('jsonwebtoken');

// This api will dump the data in db 
const handler = async (req: any, res: any) => {
    if (req.method == "POST") {

        let verify_code = Math.floor(Math.random() * (9999 - 111)) + 1;

        const uu = new user({
            username: req.body.username,
            email: req.body.email,
            verify_code: verify_code,
            password: CryptoJS.AES.encrypt(req.body.password, 'secretKey').toString()
        })

        await uu.save(function (err: any) {

            if (err) {
                res.status(200).json({ success: false, error: true, msg: err.message })
            } else {
                var token = jwt.sign({ email: uu.email, username: uu.username, accstatus: "unverify", membership: "inactive" }, 'jwtSecretKey', { expiresIn: '2d' });
                res.status(200).json({ success: true, error: false, msg: "Your Account has been created successfully", token: token })

                var transporter = nodemailer.createTransport({
                    host: "mail.growyourmusic.ro", // i forget to change this wait 
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'demo@growyourmusic.ro', // Here is the mail account username
                        pass: 'GrowYourMus1crn$'  // here is the password
                    }
                });

                var mailOptions = {
                    from: 'demo@growyourmusic.ro', // here the mail account which written up (user)
                    to: 'luca.batori.info@gmail.com', // here is the user mail account for comfimation otp/code like google and others
                    subject: 'Please Verify your account',
                    text: "GYM-" + verify_code,
                };
                transporter.sendMail(mailOptions);
            }
        });

    } else {
        res.status(200).json({ error: "This method is not post" })
    }
}

export default connectDB(handler);

