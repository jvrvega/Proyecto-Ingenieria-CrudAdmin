
import Psicologo from '../models/psicologo.js'

// Función crear psicologo
export const createPsycho = async (req, res) => {
  const psico = new Psicologo(req.body);
  try {
    await psico.save();
    res.status(200).json({success: true, request: "Se creó correctamente"});
  } catch (error) {
    res.status(200).json({success: false, error:"Data incorrecta"})
  }
};


// Función buscar psicologos

export const getPsycho = async (req, res) => {
  try {
    const psico = await Psicologo.find();
    if (psico.length === 0) {
      res.status(500).json({success: false, request: 'No se encontraron psicólogos en la base de datos' });
    }
    return res.json({succes: true,  request: 'Se obtuvieron todos los psicólogos con éxito', psicologos: psico });
  } catch (error) {

    return res.status(200).json({success: false, error:"Data incorrecta"})
  }
}
