import Categoria from '../models/Categoria'


/* nombre:   
descripcion:  
*/

export const findAllCategoritas= async(req, res) => {
   try {
    const Categorias = await Categoria.find()
    res.json(Categorias)
   } catch (error) {
       console.log(error)
   }
}

export const createCategoria=async(req, res)=>{
    try {
        const newCategoria = new Categoria(
            {   nombre: req.body.nombre, 
                descripcion: req.body.descripcion
            });
        const CategoriaSaved = await newCategoria.save();
        res.json(CategoriaSaved)
    } catch (error) {
        console.log(error)
    }
}


export const findOneCategoria = async(req,res)=> {
    try {
        const oneCategoria = await Categoria.findById(req.params.id)
        res.json(oneCategoria)
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategoria = async (req, res) => {
    try {
        const data = await Categoria.findByIdAndDelete(req.params.id)
        res.json({
        message: `${data.nombre} La categoria se elimino con exito`
    });
    } catch (error) {
        console.log(error)
    }
}

export const updateCategoria = async (req, res) => {
   try {
    const updatedCategoria = await Categoria.findByIdAndUpdate(req.params.id, req.body)
    res.json(`${updatedCategoria.nombre} se actualizo con exito`)
   } catch (error) {
       console.log(error)
   }
}