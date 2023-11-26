const siswaSchema = require('../models/siswa')

module.exports = {
    getsiswa: async (req, res) => {
        try {
            const siswa = await siswaSchema.find()
            if(siswa.length > 0){
                res.status(200).json({
                    status: true,
                    data: siswa,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message: "Data Masih Kosong"
                })
            }
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    getidsiswa: async (req, res) => {
        try {
            const siswa = await siswaSchema.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Didapat"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    tambah: async (req, res) => {
        try {
            const siswa = await siswaSchema.create(req.body)
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Ditambahkan"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    ubah: async (req, res) => {
        try {
            const siswa = await siswaSchema.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Diubah"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    hapus: async (req, res) => {
        try {
            await siswaSchema.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Dihapus"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    }
}