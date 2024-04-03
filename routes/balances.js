import express from 'express'
import BalancesController from '#controllers/Balances/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.get('/', async (req, res) => {
    const { user } = req
    const { username } = user

    generateResponse(res, await BalancesController.getUserBalances({ username }))
})

router.get('/:balanceId', async (req, res) => {
    const { user } = req
    const { username } = user
    const { balanceId } = req.params

    generateResponse(res, await BalancesController.getUserBalanceById({ balanceId, username }))
})

router.post('/', async (req, res) => {
    const { data } = req.body
    const { user } = req
    const { username } = user

    generateResponse(res, await BalancesController.createUserBalance({ username, ...data }))
})

router.put('/:balanceId', async (req, res) => {
    const { data } = req.body
    const { balanceId } = req.params

    generateResponse(res, await BalancesController.updateUserBalance({ balanceId, data }))
})

export default router
