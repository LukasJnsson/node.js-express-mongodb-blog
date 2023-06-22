

/**
 * Function that authorize the user
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const redirectIfAuthenticated = (req, res, next) => {
    try {
        if (req.session.userId) {
            return res.redirect('/');
        };

    } catch (err) {
        console.log(err);

    } finally {
        next();
    };
};


export default redirectIfAuthenticated;