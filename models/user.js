// getting-started.js
const mongoose = require('mongoose');

// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');
//   // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }

// New Schema (Schema like codes which help to drop the data in db)
// for add user in db
const UserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: [true, "Email Id is required"], 
        unique: [true, "This email is already exists"] 
    },
    username: { 
        type: String, 
        required: true, 
        unique: [true, "This username is already taken"] 
    },
    password: { 
        type: String, 
        required: true 
    },
    profile_status: { 
        type: String, 
        required: true,
        default: 'unverify'
    },
    verify_code: { 
        type: String, 
        required: true,
    },
    membership: { 
        type: String, 
        required: true,
        default: 'inactive'
    },
    profilepic: { 
        type: String, 
        required: true,
        default: 'osky1.jpg'
    },
    artistname: { 
        type: String,
        required: true,
        default: 'Loading....'
    },
    featurefee: { 
        type: String,        
        required: true,
        default: 'Loading....'
    },
    description: { 
        type: String,        
        required: true,
        default: 'Loading....'
    },
}, { timestamps: true });

// mongoose.models = {}
// export default mongoose.model("User", UserSchema);

export default mongoose.models.User || mongoose.model("User", UserSchema);
