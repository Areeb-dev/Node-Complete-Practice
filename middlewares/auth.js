const jsonwebtoken = require("jsonwebtoken");


module.exports = (req, res, next) => {
    console.log("i am middleware auth")
    const token = req.headers['x-auth-token'];
    if(!token){
        return res.status(401).send("No token provided");
    }
    try {
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY || "RichBoy");
        req.user = decoded
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).send("Token Expired");
    }

}
