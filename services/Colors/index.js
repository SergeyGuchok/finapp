import ColorsModel from '#models/colors'

class ColorsService {
    constructor() {
        this.ColorsModel = ColorsModel
    }

    async getColors () {
        return this.ColorsModel.findAll()
    }
}

export default new ColorsService()
