

/**
 * Function that renders the new post view
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const postController = (req, res) => {
    let redirect;

    try {
        const title = 'New post';
        const mainHeader = title, subHeader = title;
        const validationErrors = req.flash('validationErrors');

        res.render('newPost', {
            title,
            mainHeader,
            subHeader,
            validationErrors
        });

    } catch (err) {
        redirect = true;

    } finally {
        if (redirect) {
            return res.redirect('/');
        };        
    };
};


export default postController;