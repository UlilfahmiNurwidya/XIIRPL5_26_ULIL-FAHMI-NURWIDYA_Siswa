const mongoose = require('mongoose');

const siswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan Isi Nama'],
        unique: true
    },
    niss: {
        type: String,
        required: [true, 'Silahkan Isi nis'],
        unique: true
    },
    absen: {
        type: String,
        required: [true, 'Silahkan Isi Absen'],
        unique: true
    },
    umur: {
        type: String,
        required: [true, 'Silahkan Isi umur'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    }
})

module.exports = mongoose.model('Siswa', siswaSchema)