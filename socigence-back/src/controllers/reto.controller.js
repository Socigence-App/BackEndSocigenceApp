import Reto from '../models/Reto'
import User from '../models/User'
import Categoria from '../models/Categoria'

/* titulo: 
    descripcion: 
*/

export const findAllRetos= async(req, res) => {
   try {
     await Reto.find({}, (err, retos) =>
    {User.populate(retos, {path: "user"}, (err, retos)=>{
        Categoria.populate(retos, {path: "categoria"}, (err,retos)=>{
            res.send(retos)
        })
    })})

   } catch (error) {
       console.log(error)
   }
}

export const createReto=async(req, res)=>{
    try {
        const newReto = new Reto(
            {   titulo: req.body.titulo, 
                descripcion: req.body.descripcion,
                user: req.body.user,
                categoria: req.body.categoria
            });
        const RetoSaved = await newReto.save();
        res.json(RetoSaved)
    } catch (error) {
        console.log(error)
    }
}


export const findOneReto = async(req,res)=> {
    try {
        await Reto.findById(req.params.id, {}, (err, retos) =>
        {User.populate(retos, {path: "user"}, (err, retos)=>{
            Categoria.populate(retos, {path: "categoria"}, (err,retos)=>{
                res.send(retos)
            })
        })})
    } catch (error) {
        console.log(error)
    }
}

export const deleteReto = async (req, res) => {
    try {
        const data = await Reto.findByIdAndDelete(req.params.id)
        res.json({
        message: `${data.titulo} La publicacion se elimino con exito`
    });
    } catch (error) {
        console.log(error)
    }
}

export const updateReto = async (req, res) => {
   try {
    const updatedReto = await Reto.findByIdAndUpdate(req.params.id, req.body)
    res.json(`${updatedReto.titulo} se actualizo con exito`)
   } catch (error) {
       console.log(error)
   }
}