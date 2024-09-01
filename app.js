const express = require('express');
const app = express();
const patientsRoutes = require('./routes/patient');
const doctorsRoutes = require('./routes/doctor');
const incomeRoutes = require('./routes/income');

const sequelize = require('./config/database');
const defineAssociations = require('./config/associations');
// const Doctor = require('./models/doctor');
// const Patient = require('./models/patient');
// const Income = require('./models/income');

// // Asociar los modelos después de importarlos
// Doctor.associate(sequelize.models);
// Patient.associate(sequelize.models);
// Income.associate(sequelize.models);

// Middleware para parsear JSON
app.use(express.json());

// Rutas principales
app.use('/api/patients', patientsRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/incomes', incomeRoutes);

// Definir las asociaciones antes de sincronizar
defineAssociations();

// Sincronizar modelos con la base de datos
sequelize.sync({ alter: true }).then(() => {
    console.log('Database synced');
}).catch((error) => {
    console.error('Error syncing database:', error);
});

// Puerto en que correrá el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});