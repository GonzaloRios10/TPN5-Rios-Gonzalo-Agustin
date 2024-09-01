const Income = require('../models/income');
const Patient = require('../models/patient');
const Doctor = require('../models/doctor');

// Crear un nuevo ingreso
exports.createIncome = async (req, res) => {
    try {
        const { fecha_ingreso, nro_habitacion, nro_cama, observaciones, nro_historial_paciente, matricula_medico } = req.body;
        
        const newIncome = await Income.create({
            fecha_ingreso,
            nro_habitacion,
            nro_cama,
            observaciones,
            nro_historial_paciente,
            matricula_medico
        });
        
        res.status(201).json(newIncome);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Listar todos los ingresos
exports.listIncomes = async (req, res) => {
    try {
        const incomes = await Income.findAll({
            include: [
                {
                    model: Patient,
                    attributes: ['apellido', 'nombre'],
                    as: 'paciente'
                },
                {
                    model: Doctor,
                    attributes: ['apellido', 'nombre'],
                    as: 'medico'
                }
            ]
        });

        // Mapeo de los datos para incluir campos personalizados
        const results = incomes.map(income => ({
            id_ingreso: income.id_ingreso,
            fecha_ingreso: income.fecha_ingreso,
            nro_habitacion: income.nro_habitacion,
            nro_cama: income.nro_cama,
            observaciones: income.observaciones,
            ApeNomPaciente: `${income.paciente.apellido}, ${income.paciente.nombre}`,
            ApeNomMedico: `${income.medico.apellido}, ${income.medico.nombre}`
        }));

        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};