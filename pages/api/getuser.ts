// This file is for connect to DB 
import connectDB from "../../middleware/mongoose"
// This file is use for dump the data in db
import User from "../../models/user"

// type Data = {
//   name: string
// }

const handler = async (req, res) => {

    if (req.method == "POST") {
        let users = await User.findOne({ "email": req.body.useremail, "username": req.body.username })

        if (users) { 
            res.status(200).json({users})
        } else {
            res.status(200).json({ sucess: false, msg: "No User Found" })
        }

    } else {
        res.status(400).json({ error: "This method is not post" })
    }


}

export default connectDB(handler);

