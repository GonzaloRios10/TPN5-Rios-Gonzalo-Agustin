const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Income = require('../models/income');

const defineAssociations = () => {
  // Relación de Doctor con Income (Un médico puede tener muchos ingresos)
  Doctor.hasMany(Income, { foreignKey: 'matricula_medico', as: 'ingresos' });

  // Relación de Income con Doctor (Un ingreso pertenece a un médico)
  Income.belongsTo(Doctor, { foreignKey: 'matricula_medico', as: 'medico' });

  // Relación de Patient con Income (Un paciente puede tener muchos ingresos)
  Patient.hasMany(Income, { foreignKey: 'nro_historial_paciente', as: 'ingresos' });

  // Relación de Income con Patient (Un ingreso pertenece a un paciente)
  Income.belongsTo(Patient, { foreignKey: 'nro_historial_paciente', as: 'paciente' });
};

module.exports = defineAssociations;