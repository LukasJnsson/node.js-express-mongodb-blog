

/**
 * Function that renders the login view
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const loginUserController = (req, res) => {
    let redirect;

    try {
        const title = 'Sign in';
        const mainHeader = title, subHeader = title;
        const validationError = req.flash('validationError');

        res.render('login', {
            title,
            mainHeader,
            subHeader,
            validationError
        });

    } catch (err) {
        redirect = true;

    } finally {
        if (redirect) {
            return res.redirect('/');
        };     
    };
};


export default loginUserController;