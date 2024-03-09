import UserService from '#services/User/index'
import { signJwt } from '#utils/api'

class AuthController {
    constructor() {
        this.UserService = UserService
    }

    async login({ username, password }) {
        try {
            const user = await this.UserService.getUserByUsername({ username })

            if (!user) {
                return { status: 404, errors: ['User not found.'] }
            }

            if (user.password !== password) {
                return { status: 400, errors: ['Wrong username or password'] }
            }

            const accessToken = signJwt({ username }, '7d')
            const refreshToken = signJwt({ username }, '30d')

            return { status: 200, content: { user, accessToken, refreshToken } }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async signup({ username, email, password  }) {
        try {
            const isCreated = await this.UserService.createUser({ username, email, password })

            if (isCreated) {
                return { status: 200, content: 'User created.' }
            }

            return { status: 400, errors: ['Something went wrong.'] }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }
}

export default new AuthController()
