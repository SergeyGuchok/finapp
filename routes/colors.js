import express from 'express'
import ColorsController from '#controllers/Colors/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.get('/', async (req, res) => {
    generateResponse(res, await ColorsController.getColors())
})

export default router
