// This file is for connect to DB 
import connectDB from "../../middleware/mongoose"
// This file is use for dump the data in db
import user from "../../models/user"
var jwt = require('jsonwebtoken');

var CryptoJS = require("crypto-js");

// This api will dump the data in db 
const handler = async (req:any, res:any) => {
    if (req.method == "POST") {

        let User = await user.findOne({ "email": req.body.email })
        
        if (User) {
            var bytes  = CryptoJS.AES.decrypt(User.password, 'secretKey');
            var decryptPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.email == User.email && decryptPassword == req.body.password) {

                var token = jwt.sign({ email: User.email, username: User.username, accstatus: User.profile_status, membership: User.membership }, 'jwtSecretKey', { expiresIn: '2d' });

                res.status(200).json({ sucess: true, msg: "Yeah, Details are rght", token: token })
            } else {
                res.status(400).json({ sucess: false, msg: "Invalid Credentials" })
            }
        } else {
            res.status(400).json({ sucess: false, msg: "No User Found" })
        }
    } else {
        res.status(400).json({ error: "This method is not post" })
    }
}

export default connectDB(handler);

