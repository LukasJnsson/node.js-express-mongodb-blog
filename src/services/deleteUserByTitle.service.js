
import User from "../models/user.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that deletes user
 * @param {String} username - The username
 */
const deleteUserByTitle = async (username) => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        await User.findOneAndDelete({username: username});

    } catch (err) {
        throw err;

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default deleteUserByTitle;