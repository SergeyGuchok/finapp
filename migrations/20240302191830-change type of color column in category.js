module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Categories', 'color')

    await queryInterface.addColumn('Categories', 'color', {
      type: Sequelize.INTEGER,
    })
  },

  async down () {
    console.log('do nothing')
  }
};
