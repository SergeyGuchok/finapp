module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Balances', 'icon', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Balances', 'icon')
  }
};
