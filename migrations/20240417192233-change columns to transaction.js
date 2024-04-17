module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Transactions', 'description', {
      type: Sequelize.STRING,
      defaultValue: null,
    })
    await queryInterface.addColumn('Transactions', 'recipient_balance_id', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
    await queryInterface.addColumn('Transactions', 'balance_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Transactions', 'description')
    await queryInterface.removeColumn('Transactions', 'recipient_balance_id')
    await queryInterface.removeColumn('Transactions', 'balance_id')
  }
};
