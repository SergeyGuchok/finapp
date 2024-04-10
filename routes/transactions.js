import express from 'express'
import TransactionsController from '#controllers/Transactions/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.get('/', async (req, res) => {
    const { user } = req
    const { username } = user
    const { page = 1, perPage = 10, startDate = null, endDate = null } = req.query

    generateResponse(res, await TransactionsController.getUserTransactions({ username, page, perPage, startDate, endDate }))
})

router.post('/', async (req, res) => {
    const { user } = req
    const { username } = user
    const data = req.body

    generateResponse(res, await TransactionsController.createUserTransaction({ data, username }))
})

export default router
