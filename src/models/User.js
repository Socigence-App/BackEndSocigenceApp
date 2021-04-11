import {Schema, model} from 'mongoose'

const userSchema = new Schema ({
    username: {
        type: String,
        requiered: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        trim: true
    },
    nombre: {
        type : String,
        trim: true
    },
    IdTipo: {
        type: String,
    },
    IdNumero: {
        type: Number
    },
    Telefono: {
        type: Number
    },
    contrasena: {
        type: String
    },
    usertipo: {
        type: String
    }
    
    
},{
    versionKey:false,
    timestamps: true
});

export default model ('User', userSchema)