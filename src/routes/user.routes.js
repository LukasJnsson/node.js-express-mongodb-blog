
import express from 'express';
const router = express.Router();
import userController from '../controllers/user.controller.js';
import userByIdController from '../controllers/userById.controller.js';
import registerController from '../controllers/register.controller.js';
import newUserController from '../controllers/newUser.controller.js';
import loginController from '../controllers/login.controller.js'
import newLoginController from '../controllers/newLogin.controller.js';
import authenticateUser from '../middlewares/authenticate.middleware.js';
import redirectAuthenticated from '../middlewares/redirectAuthenticated.middleware.js';
import signoutController from '../controllers/signout.controller.js';


router.get('/', authenticateUser, userController);

router.get('/register', redirectAuthenticated, registerController);

router.post('/register', redirectAuthenticated, newUserController);

router.get('/login', redirectAuthenticated, loginController);

router.post('/login', redirectAuthenticated, newLoginController);

router.get('/logout', signoutController);

// define the generic routes last to avoid error
router.get('/:id', userByIdController);


export default router;