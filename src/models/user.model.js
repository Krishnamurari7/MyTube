import mongoose, {Schema} from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            require: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, 
            require: true
        },
        coverImage:{
            type: String
        },
        watchHistory:[{
            type: Schema.Types.ObjectId,
            ref: "Video"
        }],
        password: {
            type: String,
            require: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) 
    return next();
    this.passwords = bcrypt.hash(this.password, 10)
    next()
})


export const user = mongoose.model("User", userSchema)