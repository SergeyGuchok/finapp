import TransactionsService from '#services/Transactions/index'
import UserService from '#services/User/index'

class TransactionsController {
    constructor() {
        this.TransactionsService = TransactionsService
        this.UserService = UserService
    }

    async getUserTransactions({ username, page, perPage, startDate, endDate }) {
        try {
            const { id } = await this.UserService.getUserByUsername({ username })
            const transactions = await this.TransactionsService.getUserTransactions({ userId: id, page, perPage, startDate, endDate })

            return { status: 200, content: transactions }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async generateUserHistory({ username, startDate, endDate }) {
        try {
            const { id } = await this.UserService.getUserByUsername({ username })
            const transactions = await this.TransactionsService.getUserTransactionsWithinADate({ userId: id, startDate, endDate })

            const deposits = transactions.filter(t => t.type === 'deposit')
            const expenses = transactions.filter(t => t.type === 'expenses')

            const depositsAmount = deposits.reduce((acc, val) => acc + val.amount, 0)
            const expensesAmount = expenses.reduce((acc, val) => acc + val.amount, 0)
            const difference = depositsAmount - expensesAmount

            return {
                status: 200,
                content: {
                    diff: difference,
                    exp: expensesAmount,
                    dep: depositsAmount,
                }
            }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async getUserTransactionById({ username, id }) {
        try {
            const { id: userId } = await this.UserService.getUserByUsername({ username })
            const transaction = await this.TransactionsService.getUserTransactionById({ userId, id, })

            return { status: 200, content: transaction }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }

    async createUserTransaction ({ data, username }) {
        try {
            const { id } = await this.UserService.getUserByUsername({ username })

            await this.TransactionsService.createUserTransaction({ data, userId: id })

            return { status: 200, content: 'Transaction successful' }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }
}

export default new TransactionsController()
