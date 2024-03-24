import BalancesService from '#services/Balances/index'
import UserService from '#services/User/index'

class ColorsController {
    constructor() {
        this.BalancesService = BalancesService
        this.UserService = UserService
    }

    async getUserBalances({ username }) {
        try {
            const balances = await this.BalancesService.getUserBalancesByUsername({ username })

            return { status: 200, content: balances }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async createUserBalance ({ username, name, colorId, balance = 0.00  }) {
        try {
            const { id } = await this.UserService.getUserByUsername({ username })

            await this.BalancesService.createUserBalance({ userId: id, name, colorId, balance })

            return { status: 200, content: 'Balance created' }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async updateUserBalance ({ balanceId, data }){
        try {
            await this.BalancesService.updateUserBalance({ data, balanceId })

            return { status: 200, content: 'Balance updated' }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async getUserBalanceById ({ username, balanceId }) {
        try {
            const { id } = await this.UserService.getUserByUsername({ username })

            const balance = await this.BalancesService.getUserBalanceById({ balanceId })

            if (balance.user_id !== id) {
                return { status: 401, content: 'Not your balance' }
            }

            return { status: 200, content: balance }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }
}

export default new ColorsController()
