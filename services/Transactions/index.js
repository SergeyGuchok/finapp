import moment from 'moment'
import { paginate } from "#utils/queries";

import TransactionsModel from '#models/transaction'

class TransactionsService {
    constructor() {
        this.TransactionsModel = TransactionsModel
    }

    async getUserTransactions ({ userId, page, perPage, startDate, endDate }) {
        const where = {
            user_id: userId,
        }

        if (startDate && endDate) {
            where.created_at = {
                $between: [startDate, endDate]
            }
        }

        return this.TransactionsModel.findAll(paginate(where, { page, perPage }))
    }

    async getUserTransactionsWithinADate ({ userId, startDate, endDate }) {
        return this.TransactionsModel.findAll({ where: { user_id: userId, user_created_id: { $between: [startDate, endDate] } } })
    }

    async getUserTransactionById ({ userId, id }) {
        return this.TransactionsModel.findOne({ where: { user_id: userId, id } })
    }

    async createUserTransaction ({ data, userId }) {
        const currentTime = moment().valueOf()

        return this.TransactionsModel.create({ ...data, user_id: userId, created_at: currentTime, updated_at: currentTime })
    }
}

export default new TransactionsService()
