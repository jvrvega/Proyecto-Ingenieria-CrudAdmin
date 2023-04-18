import {Schema,model} from "mongoose"

//schema profession
const  profeSchema = Schema({
    profile: {type: String},
    age: {type: Number},
    description:{type: String},
    keywords: {type: String},
    picture: {type: String},
    complete: {type: Boolean,
                default: false},
    location: {
      country: String,
      region: String,
      city: String
    }
});

//schema psychologo
const  psychoSchema = Schema({
    profile: {type: String},
    email: {type: String},
    password:{type: String},
    name: {type: String},
    lastname: {type: String},
    birthday: {type: String},
    role:{type: String, default: 'paciente'},
    age:{type: Number},
    validacion:{type: Boolean, default: false},
    profession: profeSchema,
},{
    versionKey: false,
    timestamps: true,
});

export default  model("Psicologo", psychoSchema);