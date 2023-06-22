
import User from "../models/user.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that fetch the username by the _id
 * @param {String} userId - The id of the user
 * @returns {Object} - The username
 */
const getUserById = async (userId) => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        const user = await User.findById(userId).select('username -_id');
        return user;

    } catch (err) {
        throw err;

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default getUserById;