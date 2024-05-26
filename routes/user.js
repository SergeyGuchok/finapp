import express from 'express'
import UserController from '#controllers/User/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.get('/', async (req, res) => {
    const { user } = req
    const { username } = user

    return generateResponse(res, await UserController.getUserByUsername({ username }))
})

router.get('/sorting', async (req, res) => {
    const { user } = req
    const { username } = user

    return generateResponse(res, await UserController.getUserSortingByUsername({ username }))
})

router.post('/sorting', async (req, res) => {
    const { user } = req
    const { daat } = req.body
    const { username } = user

    return generateResponse(res, await UserController.updateUserSorting({ username, date }))
})

export default router
