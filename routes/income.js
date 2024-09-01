const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

// Endpoint para crear un nuevo ingreso
router.post('/', incomeController.createIncome);
// Endpoint para listar todos los ingresos
router.get('/', incomeController.listIncomes);

module.exports = router;