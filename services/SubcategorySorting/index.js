import SubcategorySorting from '#models/subcategorySort'

class SubcategorySortingService {
    constructor() {
        this.SubcategorySortingModel = SubcategorySorting
    }

    async getSubcategorySortingByUserCategoryId ({ userCategoryId }) {
        return this.SubcategorySortingModel.findAll({ where: { user_category_id: userCategoryId } })
    }

    async updateSubcategorySorting ({ userCategoryId, data,  }){
        const isExist = await this.SubcategorySortingModel.findOne({ where: { user_category_id: userCategoryId } })

        if (isExist) {
            return this.SubcategorySortingModel.update(
                {...data},
                { where: { user_category_id: userCategoryId } }
            )
        }

        return this.SubcategorySortingModel.create(
            {...data, user_category_id: userCategoryId},
        )
    }
}

export default new SubcategorySortingService()
