
import BlogPost from "../models/post.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that fetch post by title
 * @param {String} title - The title of the post
 * @returns {Array} - The array with the post
 */
const getPostByTitle = async (title) => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        const post = await BlogPost.findOne({title: title}).select('userid title text');
        return post;

    } catch (err) {
        throw err;

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default getPostByTitle;