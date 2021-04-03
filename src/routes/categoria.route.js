import {Router} from 'express'
import * as categoriaController from '../controllers/categoria.controller'


const router = Router()

router.get('/', categoriaController.findAllCategoritas);

router.post('/', categoriaController.createCategoria);

router.get('/:id', categoriaController.findOneCategoria);

router.delete('/:id', categoriaController.deleteCategoria);

router.put('/:id', categoriaController.updateCategoria)


export default router;