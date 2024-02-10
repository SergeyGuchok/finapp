import express from 'express'
import AuthController from '#controllers/Auth/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.post('/', async (req, res) => {
    const { email, password, username } = req.body

    return generateResponse(res, await AuthController.signup({ email, password, username }))
})

export default router

