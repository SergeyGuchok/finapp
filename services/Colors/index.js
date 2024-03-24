import Colors from '#models/Colors'

class ColorsService {
    constructor() {
        this.ColorsModel = Colors
    }

    async getColors () {
        return this.ColorsModel.findAll()
    }
}

export default new ColorsService()
