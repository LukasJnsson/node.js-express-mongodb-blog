

/**
 * Function that sign out the user by destroying the session
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const signoutUserController = (req, res) => {
    let redirect;

    try {
        req.session.destroy();
        res.redirect('/');

    } catch (err) {
        redirect = true;

    } finally {
        if (redirect) {
            return res.redirect('/');
        };
    };
};


export default signoutUserController;