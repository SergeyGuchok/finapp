module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Transactions', 'user_created_at', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Transactions', 'user_created_at')
  }
};
