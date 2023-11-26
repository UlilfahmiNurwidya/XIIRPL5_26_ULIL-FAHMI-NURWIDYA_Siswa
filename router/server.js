const express = require('express');
const router = express.Router()
const siswacontrollers = require('../controllers/siswacontrollers')

router.get('/getsiswa', siswacontrollers.getsiswa)

router.get('/get/:id', siswacontrollers.getidsiswa)

router.post('/siswa', siswacontrollers.tambah)

router.put('/ubah/:id', siswacontrollers.ubah)

router.delete('/delete/:id', siswacontrollers.hapus)

module.exports = router;