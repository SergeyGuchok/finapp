import BalancesModel from '#models/balance'

class BalancesService {
    constructor() {
        this.BalancesModel = BalancesModel
    }

    async getUserBalancesByUsername ({ userId }) {
        return this.BalancesModel.findAll({ where: { user_id: userId } })
    }

    async createUserBalance ({ userId, balance, ...data }) {
        return this.BalancesModel.create({ user_id: userId, balance, ...data  })
    }

    async updateUserBalance ({ data, balanceId }) {
        return this.BalancesModel.update({
            ...data,
        }, {
            where: { id: balanceId }
        })
    }

    async getUserBalanceById ({ balanceId }) {
        return this.BalancesModel.find({ where: { id: balanceId } })
    }

    async deleteUserBalanceByBalanceId ({ id }) {
        return this.BalancesModel.destroy({ where: { id } })
    }
}

export default new BalancesService()
