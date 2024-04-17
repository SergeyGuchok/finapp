import express from 'express'
import UserController from '#controllers/User/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.get('/', async (req, res) => {
    const { user } = req
    const { username } = user

    return generateResponse(res, await UserController.getUserByUsername({ username }))
})

export default router
