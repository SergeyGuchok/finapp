import Category from '#models/category'

class CategoryService {
    constructor() {
        this.CategoryModel = Category
    }

    async getCategoriesByIds ({ ids }) {
        return this.CategoryModel.findAll({ where: { id: ids } })
    }

    async createCategory ({ data }) {
        return this.CategoryModel.create({ ...data })
    }

    async updateCategoryById({ categoryId, data }) {
        return this.CategoryModel.update(
            {...data},
            { where: { id: categoryId } }
        )
    }

    async deleteCategoryById({ categoryId }) {
        return this.CategoryModel.destroy({
            where: {
                id: categoryId
            }
        })
    }
}

export default new CategoryService()
