import User from '../models/User'


/* username:   
email:   
nombre:   
IdTipo:   
IdNumero: 
Telefono:  
contrasena:  */

export const findAllUsers= async(req, res) => {
   try {
    const Users = await User.find()
    res.json(Users)
   } catch (error) {
       console.log(error)
   }
}

export const createUser=async(req, res)=>{
    try {
        const newUser = new User(
            {   username: req.body.username, 
                email: req.body.email,
                nombre: req.body.nombre,
                IdTipo: req.body.IdTipo,
                IdNumero: req.body.IdNumero,
                Telefono:  req.body.Telefono,
                contrasena: req.body.contrasena,
                usertipo: req.body.usertipo
            });
        const UserSaved = await newUser.save();
        res.json(UserSaved)
    } catch (error) {
        console.log(error)
    }
}

export const findByUsername = async(req, res) =>{
    try {
        const Users = await User.find({username: req.params.username})
         res.json(Users)
    } catch (error) {
        console.log(error)
    }
}

export const findOneUser = async(req,res)=> {
    try {
        const oneUser = await User.findById(req.params.id)
        res.json(oneUser)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        res.json({
        message: `${data.username} el usuario se elimino con exito`
    });
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (req, res) => {
   try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
    res.json(`${updatedUser.title} se actualizo con exito`)
   } catch (error) {
       console.log(error)
   }
}

