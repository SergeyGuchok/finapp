module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.removeColumn('Categories', 'type')
    await queryInterface.renameColumn('Categories', 'color', 'color_id')
  },

  async down () {
    console.log('do nothing')
  }
};
