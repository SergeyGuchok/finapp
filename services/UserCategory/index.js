import UserCategory from '#models/userCategory'

class UserCategoryService {
    constructor() {
        this.UserCategoryModel = UserCategory
    }

    async getUserCategoriesByUserId({ userId }) {
        return this.UserCategoryModel.findAll({ where: { user_id: userId } })
    }

    async createUserCategory ({ user, category }) {
        const { id: userId } = user
        const { id: categoryId } = category

        return this.UserCategoryModel.create({ user_id: userId, category_id: categoryId })
    }

    async getUserCategoryByCategoryId ({ categoryId }) {
        return this.UserCategoryModel.findOne({ where: { category_id: categoryId } })
    }

    async deleteCategoryById ({ categoryId, userId }) {
        return this.UserCategoryModel.destroy({
            where: { user_id: userId, category_id: categoryId }
        })
    }

    async archiveUserCategoryById ({ categoryId }) {
        return this.UserCategoryModel.update({
            is_archived: 1,
        }, {
            where: { id: categoryId }
        })
    }

    async unarchiveUserCategoryById ({ categoryId }) {
        return this.UserCategoryModel.update({
            is_archived: 0,
        }, {
            where: { id: categoryId }
        })
    }
}

export default new UserCategoryService()
