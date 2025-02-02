import express from 'express'
import UserCategoryController from '#controllers/UserCategory/index'
import { generateResponse } from '#utils/api'

const router = express.Router()

router.get('/', async (req, res) => {
    const { user } = req
    const { username } = user

    return generateResponse(res, await UserCategoryController.getUserCategoriesByUsername({ username }))
})

router.post('/add', async (req, res) => {
    const { data } = req.body
    const { user } = req
    const { username } = user

    return generateResponse(res, await UserCategoryController.createUserCategory({ username, data }))
})

router.put('/:categoryId', async (req, res) => {
    const { data } = req.body
    const { user } = req
    const { username } = user
    const { categoryId } = req.params

    return generateResponse(res, await UserCategoryController.updateUserCategoryById({ username, categoryId, data }))
})

router.delete('/:categoryId', async (req, res) => {
    const { user } = req
    const { username } = user
    const { categoryId } = req.params

    return generateResponse(res, await UserCategoryController.deleteCategoryById({ username, categoryId }))
})

router.put('/archive/:categoryId', async (req, res) => {
    const { user } = req
    const { username } = user
    const { categoryId } = req.params

    return generateResponse(res, await UserCategoryController.archiveUserCategoryById({ username, categoryId }))
})

router.put('/unarchive/:categoryId', async (req, res) => {
    const { user } = req
    const { username } = user
    const { categoryId } = req.params

    return generateResponse(res, await UserCategoryController.unarchiveUserCategoryById({ username, categoryId }))
})

export default router
