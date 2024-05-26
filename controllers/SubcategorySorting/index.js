import SubcategorySortingService from "#services/SubcategorySorting";
import UserService from '#services/UserService';
import UserCategoryService from '#services/UserCategoryService';

class SubcategorySortingController {
    constructor() {
        this.SubcategorySortingService = SubcategorySortingService
        this.UserService = UserService;
        this.UserCategoryService = UserCategoryService;
    }

    async updateSubcategorySortingForUserCategory({ username, data }) {
        try {
            const { user_category_id: userCategoryId, ...rest } = data
            const user = await this.UserService.getUserByUsername({ username })
            const userCategories = await this.UserCategoryService.getUserCategoriesByUserId({ userId: user.id })

            if (!userCategories.some(el => el.user_category_id === userCategoryId)) {
                return { status: 400, errors: ['Not your user category'] }
            }

            await this.SubcategorySortingService.updateSubcategorySorting({ userCategoryId, rest })

            return { status: 200, content: 'Sorting successfully updated' }
        } catch (e) {
            return { status: 400, errors: [e] }
        }
    }
}

export default new SubcategorySortingController()
