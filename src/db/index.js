import mongoose from "mongoose";
import { DB_NAME } from "../constant";


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb Connected !! Db host: ${connectionInstance.connection.host}`);
    }catch (error){
        console.log("mongodb connection error", error);
        process.exit(1)
    }
}

export default connectDB