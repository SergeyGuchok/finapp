module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['withdrawal', 'deposit', 'expenses']
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Transactions')
  }
};
