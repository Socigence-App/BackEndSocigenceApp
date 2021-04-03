import {Schema, model} from 'mongoose'

const categoriaSchema = new Schema ({
    nombre: {
        type: String,
        requiered: true,
        trim: true,
        unique: true
    },
    descripcion: {
        type : String,
        trim: true
    }
},{
    versionKey:false,
    timestamps: true
});

export default model ('Categoria', categoriaSchema)