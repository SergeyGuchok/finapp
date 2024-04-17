module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'balance_sort', {
      type: Sequelize.JSON,
      defaultValue: [],
    })
    await queryInterface.addColumn('Users', 'categories_sort', {
      type: Sequelize.JSON,
      defaultValue: [],
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Users', 'categories_sort')
    await queryInterface.removeColumn('Users', 'balance_sort')
  }
};
