const jsonwebtoken = require("jsonwebtoken");


module.exports = (req, res, next) => {
    if(req.user.rolde_id !== 2){
        return res.status(403).send("Permission denied");
    }else{
        next();
    }
}
