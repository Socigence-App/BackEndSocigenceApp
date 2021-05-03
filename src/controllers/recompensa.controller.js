import Recompensa from '../models/Recompensa'


/* titulo: 
    descripcion: 
   
*/

export const findAllRecompensas= async(req, res) => {
   try {
     await Recompensa.find({}, (err, Recompensas) =>
    {
            res.send(Recompensas)
        })
   } catch (error) {
       console.log(error)
   }
}

export const createRecompensa=async(req, res)=>{
    try {
        const newRecompensa = new Recompensa(
            {   titulo: req.body.titulo, 
                descripcion: req.body.descripcion
            });
        const RecompensaSaved = await newRecompensa.save();
        res.json(RecompensaSaved)
    } catch (error) {
        console.log(error)
    }
}


export const findOneRecompensa = async(req,res)=> {
    try {
        await Recompensa.findById(req.params.id, {}, (err, Recompensas) =>
        {
                res.send(Recompensas)
            })
    } catch (error) {
        console.log(error)
    }
}

export const deleteRecompensa = async (req, res) => {
    try {
        const data = await Recompensa.findByIdAndDelete(req.params.id)
        res.json({
        message: `${data.titulo} La recompensa se elimino con exito`
    });
    } catch (error) {
        console.log(error)
    }
}

export const updateRecompensa = async (req, res) => {
   try {
    const updatedRecompensa = await Recompensa.findByIdAndUpdate(req.params.id, req.body)
    res.json(`${updatedRecompensa.titulo} se actualizo con exito`)
   } catch (error) {
       console.log(error)
   }
}