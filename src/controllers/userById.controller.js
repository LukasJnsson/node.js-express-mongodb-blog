
import getPostsByUser from "../services/user.service.js";


/**
 * Function that renders the user view
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const userByIdController = async (req, res) => {
    let redirect;

    try {
        const blogPosts = await getPostsByUser(req.params.id);
        const title = blogPosts[0].userid.username, mainHeader = title;
        const subHeader = 'Posts by';

        res.render('profileById', {
            blogPosts,
            title,
            mainHeader,
            subHeader
        });

    } catch (err) {
        redirect = true;

    } finally {
        if (redirect) {
            return res.redirect('/');
        };
    };
};


export default userByIdController;