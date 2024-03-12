import { asyncHandler } from "../utils/asyncHandler.js";

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

    
})

export { registerUser }