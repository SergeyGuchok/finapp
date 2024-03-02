module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.removeColumn('Categories', 'type')
    await queryInterface.addColumn('Categories', 'type', {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ['income', 'expenses'],
      defaultValue: 'income',
    })
  },

  async down () {
    console.log('do nothing')
  }
};
