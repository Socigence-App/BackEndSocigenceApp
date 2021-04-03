import {Router} from 'express'
import * as userController from '../controllers/user.controller'


const router = Router()

router.get('/', userController.findAllUsers);

router.post('/', userController.createUser);

router.get('/:username', userController.findByUsername);

router.get('/id/:id', userController.findOneUser);

router.delete('/:id', userController.deleteUser);

router.put('/:id', userController.updateUser)


export default router;

