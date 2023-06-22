

/**
 * Function that authorize the user
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const authorizeUser = (req, res, next) => {
    try {
        if (req.session.userId) {
            res.locals.loggedIn = true;
        } else {
            res.locals.loggedIn = false;
        };

    } catch (err) {
        console.log(err);

    } finally {
        next();
    };
};


export default authorizeUser;