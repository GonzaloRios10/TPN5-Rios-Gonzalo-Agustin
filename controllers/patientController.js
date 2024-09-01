const Patient = require('../models/patient');  // Modelo en inglés

exports.createPatient = async (req, res) => {
    try {
        const newPatient = await Patient.create(req.body);
        res.status(201).json({
            message: 'Patient created successfully',
            patient: newPatient
        });
    } catch (error) {
        console.error('Error:', error);  
        res.status(500).json({ 
            error: 'Error creating patient',
            details: error.message
        });
    }
};

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving patients' });
    }
};

exports.updatePatient = async (req, res) => {
    const { nss } = req.params;
    try {
        // Buscar el paciente por NSS
        const patient = await Patient.findOne({ where: { nss } });
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        await patient.update(req.body);
        res.json({ message: 'Patient updated successfully', patient });
    } catch (error) {
        res.status(500).json({ error: 'Error updating patient', details: error.message });
    }
};

exports.deletePatient = async (req, res) => {
    const { nss } = req.params;
    try {
        // Buscar el paciente por NSS
        const patient = await Patient.findOne({ where: { nss } });
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        
        await patient.destroy();
        res.json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting patient', details: error.message });
    }
};

// Obtener un paciente por su NSS
exports.getPatientByNSS = async (req, res) => {
    const { nss } = req.params; // Extraer el nss de los parámetros de la URL
    try {
        const patient = await Patient.findOne({ where: { nss } });
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving patient by NSS' });
    }
};