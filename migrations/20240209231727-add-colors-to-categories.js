module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => Promise.all(
          [queryInterface.addColumn('Categories', 'color', {
            type: Sequelize.STRING,
          }, { transaction: t })]
      ))
  },

  async down (queryInterface) {
    await queryInterface.sequelize.transaction(t => Promise.all(
        [queryInterface.removeColumn('Categories', 'color', { transaction: t })]
    ))
  }
};
