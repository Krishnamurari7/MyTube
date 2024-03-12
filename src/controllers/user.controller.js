import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { user } from "../models/user.model.js"
import uploadOnCloudinary from "../utils/cloudnary.js"

const registerUser = asyncHandler( async (req, res) => {
    // res.status(200).json({
    //     message: "run server krishna"
    // })


    //get user details from fronted
    //validation - not empty
    //check if user already exists: username, email
    //check for image , check for avtar
    //upload them to cloudnary, avtar
    //create user object - create entry in db
    //remove password and refresh token file from resonse
    //check for user creation 
    //return response


    const {fullName, email, username, password} =req.body
    console.log("email", email);

    // if(fullName === ""){
    //     throw new ApiError(400, "fullName is required")
    // }
   if(
    [fullName, email, username, password].some((field) => 
    field?.trim() === "")
   ){
    throw new ApiError(400, "All fields are required")
   }
   const existedUser = User.findOne({
    $or: [ {username}, {email} ]
   })
   if(existedUser){
    throw new ApiError (409, "User with email our username are existed")
   }

   const avatarLocalPath = req.files?.avatar[0]?.path;
   const coverImageLocalPath = req.files?.coverImage[0]?.path;

   if(!avatarLocalPath){
    throw new ApiError (404, "avtar is required")
   }

})

export { registerUser }