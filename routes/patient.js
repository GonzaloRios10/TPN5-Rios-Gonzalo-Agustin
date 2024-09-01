const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Endpoint para crear un nuevo paciente
router.post('/', patientController.createPatient);
// Endpoint para obtener a todos los pacientes
router.get('/', patientController.getAllPatients);
// Endpoint para actualizar un paciente
router.put('/:nss', patientController.updatePatient);
// Endpoint para eliminar paciente
router.delete('/:nss', patientController.deletePatient);
// Endpoint para obtener un paciente por su NSS
router.get('/nss/:nss', patientController.getPatientByNSS);

module.exports = router;