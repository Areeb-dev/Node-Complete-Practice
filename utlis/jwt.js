const jsonwebtoken = require("jsonwebtoken")

module.exports.generateJWT = (payload) => {
    const token = jsonwebtoken.sign(
        { payload },
        process.env.JWT_SECRET_KEY || "RichBoy",
        {expiresIn: '1d'}
    )
    return token;
}
