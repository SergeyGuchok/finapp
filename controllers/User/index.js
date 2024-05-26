import UserService from '#services/User/index'

class UserController {
    constructor() {
        this.UserService = UserService
    }

    async getUserByUsername({ username }) {
        return this.UserService.getUserByUsername({ username })
    }

    async getUserSortingByUsername({ username }) {
        return this.UserService.getUserSortingByUsername({ username })
    }

    async updateUserSorting({ username, data }) {
        return this.UserService.updateUserSorting({ username, data })
    }
}

export default new UserController()
