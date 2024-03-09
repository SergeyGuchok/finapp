import express from 'express'
import AuthController from '#controllers/Auth/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.post('/', async (req, res) => {
    const { username, password } = req.body

    generateResponse(res, await AuthController.login({ username, password }))
})

export default router
