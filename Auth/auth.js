const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
require('dotenv').config()

exports.authRole = (role) => {
    try
    {
        return async (req, res, next) => {

            const authToken = req.headers.authorization.split(' ')[1];
            const decodeToken = jwt.verify(authToken, process.env.JWT_SECRET)
            console.log(decodeToken)
            const user = await User.findOne(
                {
                    where : { 
                        username: decodeToken.username 
                    }
                }
            );
            if (user.role !== role) {
                return res
                    .status(401)
                    .json({ message: 'Unauthorized' });                     
            }
            req.user = user;
            next()
        };
    }
    catch (error)
    {
        console.log(err)
        return res
                .status(401)
                .send('User Unauthorized')
    }
}

