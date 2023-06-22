
import newLogin from '../services/newLogin.service.js';
import bcrypt from 'bcrypt';


/**
 * Function that sign in the user and creates a session
 * @param {Object} req - The incoming request object
 * @param {Object} res - The response object
 */
const newLoginUserController = async (req, res) => {
    let redirect;

    try {
        const { username, password } = req.body;
        const user = await newLogin(username);

        const validationError = 'Invalid username or password!';
        
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                req.session.userId = user._id;
                res.redirect('/');
            } else {
                req.flash('validationError', validationError);
                return res.redirect('/users/login');
            };
        } else {
            req.flash('validationError', validationError);
            return res.redirect('/users/login');
        };

    } catch (err) {
        redirect = true;

    } finally {
        if (redirect) {
            return res.redirect('/');
        };
    };
};


export default newLoginUserController;