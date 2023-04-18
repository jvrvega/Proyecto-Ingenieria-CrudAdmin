import {Schema,model} from "mongoose"

const adminSchema = Schema({
  role: {type:String, default:"administrador"},
  profile: {type: String},
  name: {type: String},
  email: {type: String},
  password: {type: String}
},{
    versionKey: false,            
    timestamps: true,             
});

export default model("Administrador",adminSchema);
