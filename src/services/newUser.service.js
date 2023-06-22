
import User from "../models/user.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that creates new user
 * @param {Object} user - The user data
 */
const newUser = async (user) => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        await User.create({
            username: user.username,
            password: user.password
        });

    } catch (err) {
        throw err;

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default newUser;