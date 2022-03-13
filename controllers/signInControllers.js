const SignupUser = require("../models/Signup.js");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../utlis/jwt");

module.exports = {
  signIn: async (req, res) => {
    try {
      let { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).send({
          statusCode: 400,
          success: false,
          message: "Please Fill All Required Fields",
        });
      }
      // check user exist or not?
      const user = await SignupUser.findOne({ email: email }).lean();

      if (!user) {
        return res.status(400).send({
          statusCode: 400,
          success: false,
          message: "Invalid Credentials!",
        });
      }

      //if user exist then check password isCorrect or not?
      const getpassWord = user.password;
      //getpassWord == get password form database
      const recheckPassword = bcrypt.compareSync(password, getpassWord);

      if (!recheckPassword) {
        return res.status(400).send({
          statusCode: 400,
          success: false,
          message: "Incorect Password!",
        });
      }

      // generate JWT
      let token = generateJWT({
        user_id: user._id,
        email: user.email,
        fullName: user.email,
      });

      delete user["password"];
      return res.status(200).send({
        statusCode: 200,
        success: true,
        message: "Sign In sucessfully",
        user: { ...user, token },
      });
    } catch (e) {
      console.log("error", e);
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
};
