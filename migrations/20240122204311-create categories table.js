module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      parent_id: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Categories')
  }
};
