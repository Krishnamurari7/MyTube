// require ('dotenv').config({path: './env'})

import dotenv from "dotenv"

import mongoose, { Mongoose } from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()











// import { Express } from "express";
// const app = Express()

// (async () => {
//     try{

//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("Error", Error);
//             throw err
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listing on port ${process.env.PORT}`);
//         })
//     }catch (error) {
//         console.error("Error: ", error);
//         throw err
//     }
// })()
