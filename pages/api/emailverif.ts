// This file is for connect to DB 
import connectDB from "../../middleware/mongoose"
// This file is use for dump the data in db
import user from "../../models/user"

var jwt = require('jsonwebtoken');

// This api will dump the data in db 
const handler = async (req: any, res: any) => {
    if (req.method == "POST") {

        let User = await user.findOne({ "email": req.body.email, "username": req.body.username })

        if (User) {
            if (req.body.verif_code == User.verify_code) {

                user.findByIdAndUpdate(User._id, { profile_status: 'pending' },
                    function (err, docs) {
                        if (err) {
                            res.status(200).json({ sucess: false, msg: "OOPS, Invalid Credentials" })
                        }
                        else {
                            var token = jwt.sign({ email: User.email, username: User.username, accstatus: "pending", membership: "inactive" }, 'jwtSecretKey', { expiresIn: '2d' });
                            res.status(200).json({ success: true, msg: "Yeah, Details are Right", token: token })
                        }
                    }).updateOne({ _id: User._id }, { $unset: { verify_code: "" } });

            } else {
                res.status(200).json({ success: false, msg: "Please Enter a valid GYM-code" })
            }
        } else {
            res.status(200).json({ success: false, msg: "OOPS, No User Found" })
        }

    } else {
        res.status(400).json({ error: "Invalid Credentials" })
    }
}

export default connectDB(handler);

