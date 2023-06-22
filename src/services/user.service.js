
import BlogPost from "../models/post.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that fetch all the posts by a user
 * @param {String} userId - The id of the user
 * @returns {Array} - The array with the posts
 */
const getPostsByUser = async (userId) => {
    let connectionStatus;

    try {
         await connectMongoDB();
         connectionStatus = true;

         const posts = await BlogPost.find({userid: userId}).select('title userid').populate('userid');
         return posts;

    } catch (err) {
        throw err;

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default getPostsByUser;