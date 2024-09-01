const Doctor = require('../models/doctor');

// Crear un nuevo médico
exports.createDoctor = async (req, res) => {
    try {
        const newDoctor = await Doctor.create(req.body);
        res.status(201).json({
            message: 'Doctor created successfully',
            doctor: newDoctor
        });
    } catch (error) {
        console.error('Error:', error);  
        res.status(500).json({ 
            error: 'Error creating doctor',
            details: error.message
        });
    }
}

// Obtener a todos los médicos
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving doctors' });
    }
};

// Obtener médicos por especialidad
exports.getByEspecialidad = async (req, res) => {
    const { especialidad } = req.params;
    try {
        const medicos = await Doctor.findAll({ where: { especialidad } });
        res.json(medicos);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving doctors by specialty' });
    }
};

// Actualizar un médico existente
exports.updateDoctor = async (req, res) => {
    const { matricula } = req.params;
    try {
        const doctor = await Doctor.findByPk(matricula);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        await doctor.update(req.body);
        res.json({ message: 'Doctor updated successfully', doctor });
    } catch (error) {
        res.status(500).json({ error: 'Error updating doctor', details: error.message });
    }
};

// Eliminar un médico por matrícula
exports.deleteDoctor = async (req, res) => {
    const { matricula } = req.params;
    try {
        const doctor = await Doctor.findByPk(matricula);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }
        
        await doctor.destroy();
        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting doctor', details: error.message });
    }
};