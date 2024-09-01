const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
    nss: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    domicilio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    codigo_postal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nro_historial_clinico: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        primaryKey: true
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'paciente',
    timestamps: false
});

// Patient.associate = (models) => {
//     Patient.hasMany(models.Income, { foreignKey: 'nro_historial_paciente', as: 'ingresos' });
// };

module.exports = Patient;