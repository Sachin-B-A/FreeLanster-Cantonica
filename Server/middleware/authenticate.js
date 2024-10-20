// User Authentication
const User = require('../model/userSchema');
const jwt = require('jsonwebtoken');


const Authenticate = async (req, res, next) => {
    // try {
    //     const token = req?.cookies.jwtoken1 || req.header("Authorization")?.replace("Bearer ","");;
    //     const verifyToken = jwt.verify(token, process.env.SECRET_KEY || "jdifajifjawiejiejtij");

    //     if (!token) {
    //         console.log("not found TOken!");
    //     }

    //     const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })

    //     if (!rootUser) { throw new Error('User Not Found!') }

    //     req.token = token;
    //     req.rootUser = rootUser;
    //     req.userId = rootUser._id;

    //     next();
    // }
    // catch (err) {
    //     res.status(401).send('Unauthorized:No token provided');
    //     console.log("auth error:", err)
    // }
    try {
        
        const token = req.cookies?.jwtoken1 || req.header("Authorization")?.replace("Bearer ","");

        // if (!token) {
        //     return res.status(400).json({
        //         message: "Unauthorized Request!",
        //         status: 400,
        //      }) 
        // }
           
        const decodedToken = jwt.verify(token,'jdifajifjawiejiejtij')
      
        const user = await User.findById(decodedToken?._id).select("-password")
        
      if (!user) {
        return res.status(400).json({
            message: "Invalid Access Token",
            status: 400,
         }) 
      }
    
      req.user = user
      
      next()

    } catch (error) {
        return res.status(500).json({
            message: "OOPS!! Something Went Wrong !!",
            status: 500,
            errorMessage: error.message,
            error
         })
    }
}

module.exports = Authenticate;
