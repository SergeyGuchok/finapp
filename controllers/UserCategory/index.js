import UserCategoryService from '#services/UserCategory/index'
import CategoryService from '#services/Category/index'
import UserService from '#services/User/index'

class UseCategoryController {
    constructor() {
        this.UserCategoryService = UserCategoryService
        this.CategoryService = CategoryService
        this.UserService = UserService
    }

    async getUserCategoriesByUsername({ username }) {
        try {
            const user = await this.UserService.getUserByUsername({ username })
            const userCategories = await this.UserCategoryService.getUserCategoriesByUserId({ userId: user.id })
            const categoriesIds = userCategories.map(userC => userC.category_id)
            const categories = await this.CategoryService.getCategoriesByIds({ ids: categoriesIds })

            return { status: 200, content:  categories  }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async createUserCategory({ username, data }) {
        try {
            const user = await this.UserService.getUserByUsername({ username })
            const category = await this.CategoryService.createCategory({ data })
            await this.UserCategoryService.createUserCategory({ user, category })

            return { status: 200, content: category }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async updateUserCategoryById({ username, categoryId, data }) {
        try {
            const user = await this.UserService.getUserByUsername({ username })
            const userCategory = await this.UserCategoryService.getUserCategoryByCategoryId({ categoryId })

            if (userCategory.user_id !== user.id) {
                return { status: 400, errors: ['Wrong category id'] }
            }

            await this.CategoryService.updateCategoryById({ categoryId, data })

            return { status: 200, content: 'Category updated' }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async deleteCategoryById({ username, categoryId }) {
        try {
            const user = await this.UserService.getUserByUsername({ username })
            const userCategory = await this.UserCategoryService.getUserCategoryByCategoryId({ categoryId })

            if (userCategory.user_id !== user.id) {
                return { status: 400, errors: ['Wrong category id'] }
            }

            await this.CategoryService.deleteCategoryById({ categoryId })
            await this.UserCategoryService.deleteCategoryById({ categoryId, userId: user.id })

            return { status: 200, content: 'Category deleted' }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async archiveUserCategoryById ({ username, categoryId }) {
        try {
            const user = await this.UserService.getUserByUsername({ username })
            const userCategory = await this.UserCategoryService.getUserCategoryByCategoryId({ categoryId })

            if (userCategory.user_id !== user.id) {
                return { status: 400, errors: ['Wrong category id'] }
            }

            await this.UserCategoryService.archiveUserCategoryById({ categoryId })

            return { status: 200, content: 'Category archived' }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async unarchiveUserCategoryById ({ username, categoryId }){
        try {
            const user = await this.UserService.getUserByUsername({ username })
            const userCategory = await this.UserCategoryService.getUserCategoryByCategoryId({ categoryId })

            if (userCategory.user_id !== user.id) {
                return { status: 400, errors: ['Wrong category id'] }
            }

            await this.UserCategoryService.unarchiveUserCategoryById({ categoryId })

            return { status: 200, content: 'Category archived' }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }
}

export default new UseCategoryController()
