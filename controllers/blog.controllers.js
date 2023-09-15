const ctrl = {};
const Posteo = require('../models/Posteos');

// Controlador para crear nueva publicación
ctrl.crearPosteo = async (req, res) => {

    // const { titulo, detalle, url_imagen, fecha } = req.body

    try {
        const posteo = await Posteo.create(req.body)
        await posteo.save()

        return res.json({
            msg: 'Posteo guardado con éxito!',
            posteo
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al crear nueva Posteo!"
        })
    }

};

// Controlador para obtener todas las publicaciones
ctrl.obtenerPosteos = async (req, res) => {
    try {
        const posteos = await Posteo.findAll();
        return res.json(posteos)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: "Error al obtener posteos!"
        })
    }
};

// Controlador para obtener una publicación
ctrl.obtenerPosteo = async (req, res) => {
    try {
        const { id } = req.params;
        const posteo = await Posteo.findByPk(id);
        return res.json(posteo)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al obtener Posteo!"
        })
    }

};

// Controlador para actualizar una publicación
ctrl.actualizarPosteo = async (req, res) => {
    const { id } = req.params;
    
    try {
        const posteo = await Posteo.findByPk(id);
        posteo.set(req.body)
        await posteo.save();
        return res.json({
            msg: 'Posteo actualizado con éxito!'
        })  
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            msg: "Error al actualizar Posteo!"
        })
    }
};

// Controlador para eliminar una publicación
ctrl.eliminarPosteo = async (req, res) => {

};


module.exports = ctrl;