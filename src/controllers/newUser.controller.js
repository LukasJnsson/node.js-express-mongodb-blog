
import newUser from "../services/newUser.service.js";


/**
 * Function that creates a new user
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const newUserController = async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password
        };
        await newUser(user);

    } catch (err) {
        const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body.username);
        return res.redirect('/users/register');
    };
    res.redirect('/');
};


export default newUserController;