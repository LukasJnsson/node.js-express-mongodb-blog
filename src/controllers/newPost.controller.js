
import newPost from "../services/newPost.service.js";


/**
 * Function that creates a new post
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const newPostController = async (req, res) => {
    try {
        const post = {
            userid: req.session.userId,
            title: req.body.title,
            text: req.body.text,
            buffer: req.file ? req.file.buffer : undefined,
            contentType: req.file ? req.file.mimetype : undefined
        };
        await newPost(post);

    } catch (err) {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
        req.flash('validationErrors', validationErrors);
        return res.redirect('/posts/new');
    };
    res.redirect('/');
};


export default newPostController;