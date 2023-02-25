// This file is for connect to DB 
import connectDB from "../../middleware/mongoose"
// This file is use for dump the data in db
import user from "../../models/user"
var jwt = require('jsonwebtoken');

// This api will dump the data in db 
const handler = async (req, res) => {
    if (req.method == "POST") {

        // console.log(req.body);
        // res.status(400).json({ success: false, msg: "No User Found" })
        let User = await user.findOne({ "email": req.body.useremail, "username": req.body.username })

        if (User) {
            user.findByIdAndUpdate(User._id,
                {
                    profile_status: 'complete',
                    artistname: req.body.artistname,
                    featurefee: req.body.featurefee,
                    description: req.body.description,
                    profilepic: req.body.profilepic,
                },
                function (err, docs) {
                    if (err) {
                        console.log(err);
                        res.status(200).json({ success: false, msg: "OOPS, Invalid Credentials" })
                    }
                    else {
                        var token = jwt.sign({ email: User.email, username: User.username, accstatus: User.profile_status, membership: User.membership }, 'jwtSecretKey', { expiresIn: '2d' });
                        res.status(200).json({ success: true, msg: "Your profile has been updated", token: token })
                    }
                });
        } else {
            res.status(400).json({ success: false, msg: "No User Found" })
        }
    } else {
        res.status(400).json({ error: "This method is not post" })
    }
}

export default connectDB(handler);



// .updateOne({ _id: User._id }, { profilepic:  })
//                 .updateOne({ _id: User._id }, { artistname:  })
//                 .updateOne({ _id: User._id }, { featurefee:  })
//                 .updateOne({ _id: User._id }, { description:  });


// user.findByIdAndUpdate(User._id, { artistname: req.body.artistname },
//     function (err, docs) {
//         if (err) {
//             res.status(200).json({ success: false, msg: "OOPS, Invalid Credentials" })
//         }
//         else {
//             user.findByIdAndUpdate(User._id, { featurefee: req.body.featurefee },
//                 function (err, docs) {
//                     if (err) {
//                         res.status(200).json({ success: false, msg: "OOPS, Invalid Credentials" })
//                     }
//                     else {
//                         user.findByIdAndUpdate(User._id, { description: req.body.description },
//                             function (err, docs) {
//                                 if (err) {
//                                     res.status(200).json({ success: false, msg: "OOPS, Invalid Credentials" })
//                                 }
//                                 else {
//                                     console.log(User)
//                                     var token = jwt.sign({ email: User.email, username: User.username, accstatus: User.profile_status, membership: User.membership }, 'jwtSecretKey', { expiresIn: '2d' });
//                                     res.status(200).json({ success: true, msg: "Yeah, Details are Right", token: token })
//                                 }
//                             });
//                     }
//                 });
//         }
//     });

// var books = [{ name: 'Mongoose Tutorial', price: 10, quantity: 25 },
//                     { name: 'NodeJS tutorial', price: 15, quantity: 5 },
//                     { name: 'MongoDB Tutorial', price: 20, quantity: 2 }];