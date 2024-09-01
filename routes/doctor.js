const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Endpoint para crear un nuevo medico
router.post('/', doctorController.createDoctor);  
// Endpoint para obtener a todos los medicos
router.get('/', doctorController.getAllDoctors);
// Endpoint para obtener un medico por su especialidad
router.get('/especialidad/:especialidad', doctorController.getByEspecialidad);
// Endpoint para actualizar un medico
router.put('/:matricula', doctorController.updateDoctor);
// Endpoint para eliminar un medico
router.delete('/:matricula', doctorController.deleteDoctor);

module.exports = router;