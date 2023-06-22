
import getPostById from "../services/postById.service.js";


/**
 * Function that fetch and renders post by id
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const postByIdController = async (req, res) => {
    let redirect;

    try {
        const blogPost = await getPostById(req.params.id);
        const title = blogPost.title;
        const mainHeader = title, subHeader = title;
        const image = blogPost.image.data.toString('base64');

        res.render('post', {
            blogPost,
            title,
            mainHeader,
            subHeader,
            image
        });

    } catch (err) {
        redirect = true;

    } finally {
        if (redirect) {
            return res.redirect('/');
        };
    };
};


export default postByIdController;