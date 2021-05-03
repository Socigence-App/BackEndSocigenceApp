import {Router} from 'express'
import * as recompensaController from '../controllers/recompensa.controller'


const router = Router()

router.get('/', recompensaController.findAllRecompensas);

router.post('/', recompensaController.createRecompensa);

router.get('/:id', recompensaController.findOneRecompensa);

router.delete('/:id', recompensaController.deleteRecompensa);

router.put('/:id', recompensaController.updateRecompensa)


export default router;