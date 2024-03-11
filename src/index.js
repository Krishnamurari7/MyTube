// require ('dotenv').config({path: './env'})

import dotenv from "dotenv"

import { Mongoose } from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()  => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB Connection failed");
})











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
