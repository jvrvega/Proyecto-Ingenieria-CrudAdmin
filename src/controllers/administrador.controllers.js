import Administrador from "../models/administrador.js"
import Psicologo from "../models/psicologo.js";


// Función crear 
export const crearAdministrador = async (req,res)=>{
  try{
  const administrador = new Administrador (req.body);
  await administrador.save();

  res.status(200).json({success: true, request: "Se creó correctamente"});
  }
  catch{
    res.status(200).json({success: false, error:"¡Data incorrecta!"})
  }
}


// Función buscar todos los admin
export const buscarAdministradores = async(req,res)=>{
  try{
  const administrador = await Administrador.find()
  res.status(200).json({success: true, administrador});
  }catch{
    res.status(500).json({success: false, error: '¡Error, intente de nuevo!'})
  }
}



// Función buscar un administrador 
export const buscarAdministrador = async (req,res)=>{
  const {id} = req.params;

  Administrador.findById(id)
  .then((content)=>{
    if(!content){
      return res.status(200).json({success: false, error: "El administrador no ha sido encontrado"})}
      return res.status(200).json({success: true, content})
  })
  .catch((error)=>{
    res.status(500).json({success: false, error: '¡Error, intente de nuevo!'})
  });
 
}


// Función eliminar 
export const eliminarAdministrador = async (req, res)=>{

  const{id}=req.params;

  Administrador.findByIdAndDelete(id).then((content)=>{
    
    if(content)
    return res.status(200).json({success: true, request: `El administrador ${id} ha sido eliminado`})

    if(!content)
    return res.status(200).json({success: false, error:"El administrador no ha sido encontrado"})
  })
  .catch((error)=>{
    res.status(500).json({success: false, error: '¡Error, intente de nuevo!'})
  })
}



// Función actualizar 
export const actualizarAdministrador = async (req,res)=>{
  const {id} = req.params;
  console.log({id}); 
  try {
    const administrador = await Administrador.findByIdAndUpdate({_id:id},{$set:req.body},{new:true})
    Administrador.findById(id).then((content)=>{

      if(content){
        return  res.status(200).json({success: true,  request: `El administrador con id: ${id}  se actualizó correctamente`});}
      if(!content){
        return  res.status(200).json({success:false, request: "El administrador que desea actualizar no existe"});}
      }).catch((error)=>{
        console.error(error);
        return res.status(500).json({success: false, error: '¡Error, intente de nuevo!'})
      })
  } catch (error) {
    console.error(error);
    return res.status(500).json({success: false, error: '¡Error, intente de nuevo!'})
  }    
}


// Función obtener los psicólogos con validacion = false
export const psicoNoValidados = async (req, res) => {
  try {
    const psico = await Psicologo.find({validacion: false});
    if (psico.length === 0) {
      return res.status(200).json({succes: false, request: 'Psicólogos no encontrados en la base de datos'});}
    return res.status(200).json({succes: true, request: 'Se obtuvieron todos los psicólogos NO VALIDADOS', psicologos: psico});
  } catch (error) {
    return res.status(500).json({ success: false, request: '¡Error al obtener los psicólogos!', error: error});
  }
}


// Función obtener los psicólogos con validacion = true y cambiar el role de "paciente" a "psicólogo"
/*export const psicoValidados = async (req, res) => {
  try {
    let role = 'paciente'; // definir el rol por defecto
    const psico = await Psicologo.find({validacion: true});
    if (psico.length === 0) {
      return res.status(200).json({ succes: false, request:  'No se encontraron psicólogos en la base de datos' });
    }
    
    // cambiar el rol por defecto si la validación es verdadera
    if (validacion) {
      role = 'psicologo';
    }
    
    return res.status(200).json({ request: 'Se obtuvieron todos los psicólogos VALIDADOS', psicologos: psico, role});
  } catch (error) {
    return res.status(500).json({request: '¡Error al obtener los psicólogos!', error: error});
  }
}*/

/*export const psicoValidados = async (req, res) => {
  try {
    let role = 'psicologo'; // valor original del rol por defecto
    const psico = await Psicologo.find({validacion: true});
    if (psico.length === 0) {
      return res.status(200).json({ succes: false, request:  'No se encontraron psicólogos en la base de datos' });
    } else {
      //role = 'psicologo'; // establecer el nuevo rol por defecto si la validación es verdadera
    }
    return res.status(200).json({ succes: true, request: 'Se obtuvieron todos los psicólogos VALIDADOS', psicologos: psico, role: role });
  } catch (error) {
    return res.status(500).json({ success: true, request: '¡Error al obtener los psicólogos!', error: error });
  }
}*/

export const psicoValidados = async (req, res) => {
  try {
    let role = 'paciente'; // valor original del rol por defecto
    const psico = await Psicologo.find({validacion: true});
    if (psico.length === 0) {
      return res.status(200).json({ succes: false, request:  'No se encontraron psicólogos en la base de datos' });
    } else {
      if (role === 'paciente') { // si el rol por defecto es paciente
        await Psicologo.updateMany({validacion: true, role: 'paciente'}, {$set: {role: 'psicologo'}});
        role = 'psicologo'; // establecer el nuevo rol por defecto si la validación es verdadera y el rol era paciente
      }
    }
    return res.status(200).json({ succes: true, request: 'Se obtuvieron todos los psicólogos VALIDADOS', psicologos: psico, role: role });
  } catch (error) {
    return res.status(500).json({ success: true, request: '¡Error al obtener los psicólogos!', error: error });
  }
}