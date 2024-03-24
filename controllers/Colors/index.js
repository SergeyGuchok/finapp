import ColorsService from '#services/Colors/index'

class ColorsController {
    constructor() {
        this.ColorsService = ColorsService
    }

    async getColors() {
        try {
            const colors = await this.ColorsService.getColors()

            return { status: 200, content: colors }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }
}

export default new ColorsController()
