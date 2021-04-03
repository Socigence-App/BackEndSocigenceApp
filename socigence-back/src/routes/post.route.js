import {Router} from 'express'
import * as postController from '../controllers/post.controller'


const router = Router()

router.get('/', postController.findAllPosts);

router.post('/', postController.createPost);

router.get('/:id', postController.findOnePost);

router.delete('/:id', postController.deletePost);

router.put('/:id', postController.updatePost)


export default router;