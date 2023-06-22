
import User from "../models/user.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that authenticates the user
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {View} - The index view if the user is not authenticated
 */
const authenticateUser = async (req, res, next) => {
    let connection = null;
  
    try {
      connection = await connectMongoDB();
      const user = await User.findById(req.session.userId);
      if (!user) {
        return res.redirect('/');
      }
      next();
  
    } catch (err) {
      console.log(err);
  
    } finally {
      if (connection) {
        await disconnectMongoDB();
      };
    };
  };


export default authenticateUser;