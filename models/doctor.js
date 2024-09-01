const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Doctor = sequelize.define('Doctor', {
    matricula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(30), 
        allowNull: true
    },
    apellido: {
        type: DataTypes.STRING(30), 
        allowNull: true
    },
    especialidad: {
        type: DataTypes.STRING(20), 
        allowNull: true
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'medico',  // Nombre de la tabla en español
    timestamps: false,
});

// Doctor.associate = (models) => {
//     Doctor.hasMany(models.Income, { foreignKey: 'matricula_medico', as: 'ingresos' });
// };

module.exports = Doctor;