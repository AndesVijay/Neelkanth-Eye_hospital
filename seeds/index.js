const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://AndesVijay:keCHUom8L1sF6iWw@cluster0.dzerq.mongodb.net/project_NEH',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to mongod')
    })
    .catch((err) => {
        console.log('Connection Error', err);
    })

const Admin = require('../models/admin')
const Doctor = require('../models/doctor')
const Patient = require('../models/patient')
const User = require('../models/user')
const AddPatient = require('../models/addpatient')
const doctors = require('./doctors')
const patients = require('./patient');
const addpatient = require('../models/addpatient');

async function insertDoctor() {
    await Doctor.insertMany(doctors)
}

async function insertPatient() {
    await Patient.insertMany(patients)
}

async function insertAddPatient(){
    await AddPatient.insertMany(addpatient)
}

// insertDoctor().then(() => {
//     console.log(`Inserted ${doctors.length} values`);
//     mongoose.connection.close()
// })

insertPatient().then(() => {
    console.log(`Inserted ${patients.length} values`);
    mongoose.connection.close()
})
