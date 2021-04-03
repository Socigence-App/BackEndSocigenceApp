import Post from '../models/Post'
import User from '../models/User'
import Categoria from '../models/Categoria'

/* titulo: 
    descripcion: 
    puntuacion: 
    user: 
    categoria:
*/

export const findAllPosts= async(req, res) => {
   try {
     await Post.find({}, (err, posts) =>
    {User.populate(posts, {path: "user"}, (err, posts)=>{
        Categoria.populate(posts, {path: "categoria"}, (err,posts)=>{
            res.send(posts)
        })
    })})

   } catch (error) {
       console.log(error)
   }
}

export const createPost=async(req, res)=>{
    try {
        const newPost = new Post(
            {   titulo: req.body.titulo, 
                descripcion: req.body.descripcion,
                puntuacion: req.body.puntuacion,
                user: req.body.user,
                categoria: req.body.categoria
            });
        const PostSaved = await newPost.save();
        res.json(PostSaved)
    } catch (error) {
        console.log(error)
    }
}


export const findOnePost = async(req,res)=> {
    try {
        await Post.findById(req.params.id, {}, (err, posts) =>
        {User.populate(posts, {path: "user"}, (err, posts)=>{
            Categoria.populate(posts, {path: "categoria"}, (err,posts)=>{
                res.send(posts)
            })
        })})
        res.json(onePost)
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async (req, res) => {
    try {
        const data = await Post.findByIdAndDelete(req.params.id)
        res.json({
        message: `${data.titulo} La publicacion se elimino con exito`
    });
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = async (req, res) => {
   try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body)
    res.json(`${updatedPost.titulo} se actualizo con exito`)
   } catch (error) {
       console.log(error)
   }
}