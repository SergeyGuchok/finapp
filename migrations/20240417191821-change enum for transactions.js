module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Transactions', 'type', {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ['transfer', 'deposit', 'expenses']
    })
  },

  async down (queryInterface) {
    console.log('wrong')
  }
};
