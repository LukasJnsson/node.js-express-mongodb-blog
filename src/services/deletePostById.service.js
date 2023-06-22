
import BlogPost from "../models/post.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that delete post by id
 * @param {String} postId - The id of the post
 */
const deletePostById = async (postId) => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        const post = await BlogPost.findByIdAndDelete(postId);

    } catch (err) {
        throw err;

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default deletePostById;