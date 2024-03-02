module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => Promise.all(
        [
            queryInterface.addColumn('Categories', 'icon', {
              type: Sequelize.STRING,
            }, { transaction: t }),
            queryInterface.createTable('Colors', {
              id: {
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                type: Sequelize.INTEGER,
              },
              color: {
                type: Sequelize.STRING,
                allowNull: false,
              },
            })
        ]
    ))
  },

  async down (queryInterface) {
    await queryInterface.sequelize.transaction(t => Promise.all(
        [
            queryInterface.removeColumn('Categories', 'icon', { transaction: t }),
            queryInterface.dropTable('Colors')
        ]
    ))
  }
};
