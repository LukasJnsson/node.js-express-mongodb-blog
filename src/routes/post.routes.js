
import express from 'express';
const router = express.Router();
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
import postController from '../controllers/post.controller.js';
import newPostController from '../controllers/newPost.controller.js';
import postByIdController from '../controllers/postById.controller.js';
import authenticateUser from '../middlewares/authenticate.middleware.js'


router.get('/new', authenticateUser, postController);

router.post('/new', authenticateUser, upload.single('image'), newPostController);

// the wild card " :id " accepts any string value
router.get('/:id', postByIdController);


export default router;