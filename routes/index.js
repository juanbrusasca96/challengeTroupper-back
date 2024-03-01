// Importa Express
const express = require('express');
const router = express.Router();

//rutas de usuario
router.use(require('./users'));

// Exporta el router
module.exports = router;
