import {Schema, model} from 'mongoose'

const recompensaSchema = new Schema ({
    titulo: {
        type: String,
        requiered: true,
        trim: true
    },
    descripcion: {
        type : String,
        trim: true
    }
},{
    versionKey:false,
    timestamps: true
});

export default model ('Recompensa', recompensaSchema)