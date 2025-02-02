import User from '#models/user'
import UserCategory from '#models/userCategory'

class UserService {
    constructor() {
        this.UserModel = User
        this.UserCategoryModel = UserCategory
    }

    async createUser ({ email, username, password }) {
        const user = await this.UserModel.create({ email, username, password })

        if (!user) return false

        const { id } = user

        return this.UserCategoryModel.bulkCreate([
            {
                user_id: id,
                category_id: 1,
            },
            {
                user_id: id,
                category_id: 2,
            },
            {
                user_id: id,
                category_id: 3,
            },
            {
                user_id: id,
                category_id: 4,
            }
        ])
    }

    async getUserByUsername ({ username }) {
        return this.UserModel.findOne({ where: { username } })
    }

    async getUserSortingByUsername ({ username }) {
        const user = await this.UserModel.findOne({ where: { username } })

        if (!user) return null

        return user.categories_sort
    }

    async updateUserSorting({ username, data }){
        return this.UserModel.update({ categories_sort: data }, { where: { username } })
    }
}

export default new UserService()
