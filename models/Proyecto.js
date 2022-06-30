import mongoose from "mongoose";

const proyectosSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim: true,
        required: true
    },
    descripcion:{
        type: String,
        trim: true,
        required: true
    },
    fechaEntrega:{
        type: Date,
        default: Date.now()
    },
    cliente:{
        type: String,
        trim: true,
        required: true
    },
    creador:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Usuario'
    },
    tareas:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Tarea'
        },
    ],
    colaboradores:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Usuario',
        },
    ],
}, {
    timestamps: true //columnas updated created
})

const Proyecto = mongoose.model("Proyecto", proyectosSchema)

export default Proyecto