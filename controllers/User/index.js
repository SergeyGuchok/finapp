import UserService from '#services/User/index'

class UserController {
    constructor() {
        this.UserService = UserService
    }

    async getUserByUsername({ username }) {
        return this.UserService.getUserByUsername({ username })
    }
}

export default new UserController()
