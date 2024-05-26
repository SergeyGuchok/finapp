module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Transactions', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
    })
    await queryInterface.changeColumn('Transactions', 'description', {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
    })
    await queryInterface.changeColumn('Transactions', 'recipient_balance_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
    })
    await queryInterface.changeColumn('Transactions', 'balance_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
    })
  },

  async down () {
    console.log('wrong')
  }
};
