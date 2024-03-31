import express from 'express'
import contact from '../models/contact.js'

const router = express.Router()
router.route('/').get((req, res) => {
    contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json("error: "+err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const newContact = new contact({ name, email, message })
    newContact.save()
    .then(() => res.json("message sent"))
    .catch(err => res.status(400).json("error: "+err))

})

export default router