const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const {name ,email, password, confirmPassword} = req.body ; 
    console.log(name ,email, password, confirmPassword);
    try {
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
              success: false,
              message: "Every field is required"
            });
          }
          const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address 📩"
    });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "password and confirm Password does not match ❌"
    });
  }
        const userInfo = userModel(req.body);
        const result = await userInfo.save();
        return res.status(200).json({
            success: true,
            data:result
        })
    } catch (e) {
        if(e.code === 11000){
            return res.status(400).json({
                success: false,
                message: "account already exist"
            
            });

        }
        return res.status(400).json({
            success: false,
            message: e.message
        
        });
    }
};
const signin = async (req,res)=>{
    const {email,password} = req.body;
    if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "email and password are required"
        });
      }

      try {
        const user = await userModel
        .findOne({
          email
        })
        .select("+password");
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
              success: false,
              message: "Invalid credentials"
            });
          }
          

        // if (!user || await bcrypt.compare(password, user.password)) {
        //     return res.status(400).json({
        //       success: true,
        //       message: "invalid credentials"
        //     });
        //   }
          const token = user.jwtToken();
          user.password = undefined;
      
          const cookieOption = {
            maxAge: 24 * 60 * 60 * 1000, //24hr
            httpOnly: true //  not able to modify  the cookie in client side
          };
      
          res.cookie("token", token, cookieOption);
          res.status(200).json({
            success: true,
            data: user
          });

        
      } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
          });
      }
};
const getUser = async (req, res, next) => {
    const userId = req.user.id;
    try {
      const user = await userModel.findById(userId);
      return res.status(200).json({
        success: true,
        data: user
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: e.message
      });
    }
  };
  const logout = (req,res,next)=>{
    try {
        const cookieOption = {
          expires: new Date(), // current expiry date
          httpOnly: true //  not able to modify  the cookie in client side
        };
    
        // return response with cookie without token
        res.cookie("token", null, cookieOption);
        res.status(200).json({
          success: true,
          message: "Logged Out"
        });
      } catch (error) {
        res.stats(400).json({
          success: false,
          message: error.message
        });
      }

  }
module.exports = { 
    signup
    , signin, 
    getUser ,
     logout };
