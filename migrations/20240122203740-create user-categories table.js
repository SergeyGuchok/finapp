module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('UsersCategories', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('UsersCategories')
  }
};
