module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Transactions', 'created_at', {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    })
    await queryInterface.addColumn('Transactions', 'updated_at', {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      allowNull: false
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('Transactions', 'created_at')
    await queryInterface.removeColumn('Transactions', 'updated_at')
  }
};
