module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Balances', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      balance: {
        type: Sequelize.DECIMAL(15, 2),
        defaultValue: 0.00,
        allowNull: false,
      },
    }, {
      tableName: 'Balances',
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Balances')
  }
};
