const ips = [
    '127.0.0.1',
    '127.0.0.1',
    '127.0.0.1',
    '127.0.0.1',
    '127.0.0.1',
];

module.exports = (req, res, next) => {
    let ip = req. socket. remoteAddress;
    if(ips.includes(ip)){
        next()
    }else{
        return res.status(403).send("Cannot access app from this network");
    }
}