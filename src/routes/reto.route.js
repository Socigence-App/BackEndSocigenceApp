import {Router} from 'express'
import * as retoCOntroller from '../controllers/reto.controller'


const router = Router()

router.get('/', retoCOntroller.findAllRetos);

router.post('/', retoCOntroller.createReto);

router.get('/:id', retoCOntroller.findOneReto);

router.delete('/:id', retoCOntroller.deleteReto);

router.put('/:id', retoCOntroller.updateReto)


export default router;