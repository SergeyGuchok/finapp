module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Transactions', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Transactions', 'user_id')
  }
};
