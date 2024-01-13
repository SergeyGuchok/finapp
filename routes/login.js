const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.status(200).json('Hey bro nice cock')
    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = router

