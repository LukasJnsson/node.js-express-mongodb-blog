

/**
 * Function that renders the register view
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const registerNewUserController = (req, res) => {
    let redirect;

    try {
        const title = 'Register';
        const mainHeader = title, subHeader = title;
        const validationErrors = req.flash('validationErrors');
        const userData = req.flash('data');
        const username = userData.length ? userData[0] : undefined;

        res.render('register', {
            title,
            mainHeader,
            subHeader,
            validationErrors,
            username,
        });

    } catch (err) {
        redirect = true;

    } finally {
        if (redirect) {
            return res.redirect('/');
        };
    };
};


export default registerNewUserController;