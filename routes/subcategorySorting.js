import express from 'express'
import SubcategorySorting from '#controllers/SubcategorySorting/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.post('/update', async (req, res) => {
    const { user } = req
    const { data } = req.body
    const { username } = user

    return generateResponse(res, await SubcategorySorting.updateSubcategorySortingForUserCategory({ username, data }))
})

export default router
