//import { MensajesController } from "../api/apiMemoria";
//import { DBService } from "../api/apiSQL";
import { MensajesController } from "../api/apiArchivoMensajes.js";
import oProductosController from "../api/apiArchivoMensajes.js";


export const checkBodyMsg = async (req, res, next) => {
  // console.log({body:req.body});
  const {name, message} = req.body;

  if (!name || !message)
    return res.status(400).json({
      msg: 'missing Body fields',
    });
  next();
};

export const getAllMsg = async (req, res) => {
  try {
    // console.log('const getAllMsg = async (req, res) => {}')
    // console.log(await MensajesController.MensajesController.get())
    // console.log(MensajesController.get())
    //const msgs = await MensajesController.MensajesController.get()
    const msgs = await oProductosController.get()
    res.json({
      msgs
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
export const getAllMsgDesnormalized = async (req, res) => {
  try {
    const msgs = await MensajesController.MensajesController.getDesnormalized()
    res.json({
      msgs
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};


export const sendMsg = async (req, res) => {
  try {
    // const { email, nombre, apellido, edad, alias, avatar, mensaje } = req.body;
    // const mensajeNuevo = { email, nombre, apellido, edad, alias, avatar, mensaje }
    // console.log({body:req.body});

    const { email, name, surname, age, alias, avatar, message } = req.body;
    const mensajeNuevo = { email, name, surname, age, alias, avatar, message }    
    
    if (!message)
      return res.status(400).json({
        msg: 'Invalid Body',
      });

    await MensajesController.MensajesController.post(mensajeNuevo)
    res.json({
      data: mensajeNuevo,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
