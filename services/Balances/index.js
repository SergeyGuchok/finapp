import BalancesModel from '#models/balance'

class BalancesService {
    constructor() {
        this.BalancesModel = BalancesModel
    }

    async getUserBalancesByUsername ({ username }) {
        return this.BalancesModel.findAll({ where: { username } })
    }

    async createUserBalance ({ userId, balance, colorId, name }) {
        return this.BalancesModel.create({ user_id: userId, balance, color_id: colorId, name })
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
}

export default new BalancesService()
