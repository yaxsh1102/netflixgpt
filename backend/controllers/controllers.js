const bcrypt = require("bcrypt")
const UserSchema = require("../model/User")

exports.signup = async(req , res)=>{
    try{
    const {name , email , password} = req.body
    
    const existingUser = await UserSchema.findOne({email:email})

    if(existingUser){
        return res.status(409).json({
            success:false ,
            message:"User Already Exists"
        })
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 10);
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }

    const newUser = await UserSchema.create({
        name , email , password:hashedPassword

    })

    return res.status(200).json({
        success:true ,
        message:"User Registered"
    })

    }catch(err){
        return res.status(500).json({
            success:false ,
            message:"Internal Server Error"
        })

    }
}


exports.login= async(req , res)=>{
    try{
        const {email , password} = req.body ;
        const existingUser = await UserSchema.findOne({email:email})

        if(!existingUser){
            return res.status(404).json({
                success:false ,
                message:"User Not Found.Kindly SignUp"
            })
        }

        const checkPassword = await bcrypt.compare(password , existingUser.password)
        if(!checkPassword){
            return res.status(401).json({
                success:false ,
                message:"Wrong Password"
            })
        }

        return res.status(200).json({
            success:true , 
            message:"User Signed In",
            name:existingUser.name
        })


    }catch(err){
        return res.status(500).json({
            success:false ,
            message:"Internal Server Error"
        })
    }
}
