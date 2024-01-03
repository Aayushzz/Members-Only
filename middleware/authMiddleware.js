const jwt = require('jsonwebtoken');

const authenticateUser = async(req, res, next) => {
const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = user;
        next();
    } catch (err) {
        res.render('index');
        return 
    }
}
module.exports = authenticateUser