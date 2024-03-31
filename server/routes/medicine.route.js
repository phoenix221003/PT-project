import express from 'express'
import medicine from '../models/medicines.js'

const router = express.Router()

router.route('/').get((req, res) => {
    medicine.find()
    .then((medicine) => res.json(medicine))
    .catch(err => res.status(400).json('error ' + err))
})

router.route('/add').post((req, res) => {
    const Name= req.body.Name
    const Description = req.body.Description
    const Strength = req.body.Strength
    const Availability = req.body.Availability
    const Photo = req.body.Photo
    const MRP = req.body.MRP
    const Key = req.body.Key
    const DosageForm = req.body.DosageForm
    const newMedicine = new medicine({
        Name, 
        Description,  
        Strength,  
        Availability,  
        Photo,  
        MRP,
        Key,
        DosageForm

    })
    newMedicine.save().then(()=>res.json("Medecine added!"))
     .catch(err => res.status(400).json('Error: '+err))
})

export default router