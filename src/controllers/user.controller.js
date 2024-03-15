import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudnary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

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


    const {fullName, email, userName, password} =req.body
    console.log("email", email);

    // if(fullName === ""){
    //     throw new ApiError(400, "fullName is required")
    // }
   if(
    [fullName, email, userName, password].some((field) => 
    field?.trim() === "")
   ){
    throw new ApiError(400, "All fields are required")
   }
   const existedUser = await User.findOne({
    $or: [ {userName}, {email} ]
   })
   if(existedUser){
    throw new ApiError (409, "User with email our username are existed")
   }

   const avatarLocalPath = req.files?.avatar[0]?.path;
  //  const coverImageLocalPath = req.files?.coverImage[0]?.path;

   let coverImageLocalPath;
   if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
    coverImageLocalPath = req.files.coverImage[0].path
   }

   if(!avatarLocalPath){
    throw new ApiError (404, "avtar is required")
   }

   const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if(!avatar){
    throw new ApiError (404, "avtar is required")
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    userName: userName.toLowerCase()
  })

  const createdUser = await User.findById(User._id).select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError(500, "something went wrong while ragistring the user")
  }


  return res.status(201).json(
    new ApiResponse(200, createdUser, "user ragistered successfull")
  )


})

export { registerUser }