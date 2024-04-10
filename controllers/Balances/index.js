import BalancesService from '#services/Balances/index'
import UserService from '#services/User/index'

class BalancesController {
    constructor() {
        this.BalancesService = BalancesService
        this.UserService = UserService
    }

    async getUserBalances({ username }) {
        try {
            const { id } = await this.UserService.getUserByUsername({ username })
            const balances = await this.BalancesService.getUserBalancesByUsername({ userId: id })

            return { status: 200, content: balances }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async createUserBalance ({ username, balance = 0.00, ...data  }) {
        try {
            const { id } = await this.UserService.getUserByUsername({ username })

            await this.BalancesService.createUserBalance({ userId: id, balance, ...data })

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

    async deleteUserBalance ({ username, balanceId }) {
        try {
            const { id } = await this.UserService.getUserByUsername({ username })
            const balances = await this.BalancesService.getUserBalancesByUsername({ userId: id })

            if (balances.length > 1) {
                await this.BalancesService.deleteUserBalanceByBalanceId({ id: balanceId })
                return { status: 401, content: 'Balance was deleted' }
            }

            return { status: 400, errors: 'You can`t have less than 1 balance' }

        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }
}

export default new BalancesController()
