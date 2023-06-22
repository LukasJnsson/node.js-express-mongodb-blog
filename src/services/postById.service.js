
import BlogPost from "../models/post.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that fetch post by id
 * @param {String} postId - The id of the post
 * @returns {Array} - The array with the post
 */
const getPostById = async (postId) => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        const post = await BlogPost.findById(postId).populate('userid');
        return post;

    } catch (err) {
        throw err;

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default getPostById;