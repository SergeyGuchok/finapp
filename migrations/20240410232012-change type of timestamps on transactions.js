module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Transactions', 'created_at', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    })
    await queryInterface.changeColumn('Transactions', 'updated_at', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Transactions', 'created_at')
    await queryInterface.removeColumn('Transactions', 'updated_at')
  }
};
