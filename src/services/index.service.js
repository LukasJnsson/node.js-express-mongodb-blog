
import BlogPost from "../models/post.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that fetch all posts
 * @returns {Array} - The array with the posts
 */
const getPosts = async () => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        const posts = await BlogPost.find({}).select('title text userid datePosted').populate('userid');
        return posts;

    } catch (err) {

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default getPosts;