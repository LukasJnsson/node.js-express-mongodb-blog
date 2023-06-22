
import BlogPost from "../models/post.model.js";
import { connectMongoDB, disconnectMongoDB } from "../configs/db.config.js";


/**
 * Function that creates new post
 * @param {Object} post - The post data 
 */
const newPost = async (post) => {
    let connectionStatus;

    try {
        await connectMongoDB();
        connectionStatus = true;

        await BlogPost.create({
            userid: post.userid,
            title: post.title,
            text: post.text,
            image: {
                data: post.buffer,
                contentType: post.mimetype
            }
        });

    } catch (err) {
        throw err;

    } finally {
        if (connectionStatus) {
            await disconnectMongoDB();
        };
    };
};


export default newPost;