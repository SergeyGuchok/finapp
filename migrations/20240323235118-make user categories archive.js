module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('UsersCategories', 'is_archived', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('UsersCategories', 'is_archived')
  }
};
