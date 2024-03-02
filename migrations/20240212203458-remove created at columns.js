module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.transaction(t => Promise.all(
        [
            queryInterface.removeColumn('UserCategories', 'createdAt', { transaction: t }),
            queryInterface.removeColumn('UserCategories', 'updatedAt', { transaction: t })
        ]
    ))
  },

  async down (queryInterface) {
    await queryInterface.sequelize.transaction(t => Promise.all(
        [
          queryInterface.removeColumn('UserCategories', 'createdAt', { transaction: t }),
          queryInterface.removeColumn('UserCategories', 'updatedAt', { transaction: t })
        ]
    ))
  }
};
