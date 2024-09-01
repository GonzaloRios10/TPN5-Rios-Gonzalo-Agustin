const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Income = sequelize.define('Income', {
    id_ingreso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_ingreso: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nro_habitacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nro_cama: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    nro_historial_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    matricula_medico: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'ingreso',
    timestamps: false
});

// Income.associate = (models) => {
//     Income.belongsTo(models.Patient, { foreignKey: 'nro_historial_paciente', as: 'paciente' });
//     Income.belongsTo(models.Doctor, { foreignKey: 'matricula_medico', as: 'medico' });
// };

module.exports = Income;