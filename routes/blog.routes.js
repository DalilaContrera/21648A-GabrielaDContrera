const router = require('express').Router();
const {
    actualizarPosteo,
    crearPosteo,
    eliminarPosteo,
    obtenerPosteo,
    obtenerPosteos,
} = require('../controllers/blog.controllers');

// ====================================================
//          Rutas para manejar Vistas (views)
// ====================================================
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})


// ====================================================
//              Rutas para manejar Datos
// ====================================================
// Ruta para obtener todas las publicaciones
router.get('/posteos/', obtenerPosteos);

// Ruta para obtener una publicación
router.get('/posteo/:id', obtenerPosteo);

// Ruta para crear nueva publicación
router.post('/posteo/', crearPosteo);

// Ruta para actualizar publicación
router.put('/posteo/:id', actualizarPosteo);

// Ruta para eliminar publicación
router.delete('/posteo/:id', eliminarPosteo);



module.exports = router;