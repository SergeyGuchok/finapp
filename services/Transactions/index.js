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

        console.log('-------------')

        console.log(paginate(where, { page, perPage }))
        console.log('-------------')

        return this.TransactionsModel.findAll(paginate(where, { page, perPage }))
    }

    async createUserTransaction ({ data, userId }) {
        const currentTime = moment().valueOf()

        return this.TransactionsModel.create({ ...data, user_id: userId, created_at: currentTime, updated_at: currentTime })
    }
}

export default new TransactionsService()
