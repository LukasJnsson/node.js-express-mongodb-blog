
import getPostsByUser from "../services/user.service.js";
import getUserById from "../services/userById.service.js";


/**
 * Function that renders the user view
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const userController = async (req, res) => {
    let redirect;

    try {
        const blogPosts = await getPostsByUser(req.session.userId);
        const title = 'My Profile', subHeader = title;
        let mainHeader;

        if (blogPosts.length === 0) {
            const user = await getUserById(req.session.userId)
            mainHeader = user.username;

        } else {
            mainHeader = blogPosts[0].userid.username;
        }

        res.render('profile', {
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

export default userController;