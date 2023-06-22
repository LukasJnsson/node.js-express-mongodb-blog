
import User from "../models/user.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that fetch user by username
 * @param {String} username - The username
 * @returns {Object} - The user
 */
const newLogin = async (username) => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        const user = await User.findOne({username:username}).select('username password');
        return user;

    } catch (err) {

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default newLogin;