

/**
 * Function that renders the 404 view
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const error404Controller = (req, res) => {
    let redirect;

    try {
        const title = 'Page Not Found';
        res.status(404);
        res.render('404', { title });

    } catch (err) {
        redirect = true;

    } finally {
        if (redirect) {
            return res.redirect('/');
        };
    };
};


export default error404Controller;