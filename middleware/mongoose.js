// This is DB Connect file 
// For example we makes db config file in php 
import mongoose from "mongoose";


const connectDB = handler => async(req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    // const DB = "mongodb+srv://demo:demo@cluster0.hhh6qc6.mongodb.net/growyourmusic";
    const DB = "mongodb+srv://growyourmusicofficial:FICa4AyjiIEVoT7s@growyourmusic.srjfbgh.mongodb.net/growyourmusic";
    await mongoose.connect(DB)
        // await mongoose.connect(process.env.MONGO_URI)
    return handler(req, res);
}

export default connectDB;