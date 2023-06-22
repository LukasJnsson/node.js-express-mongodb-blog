
import express from 'express';
const router = express.Router();
import indexController from '../controllers/index.controller.js';
import errorController from '../controllers/error.controller.js'


router.get('/', indexController);

router.use(errorController);


export default router;