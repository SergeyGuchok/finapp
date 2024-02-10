module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Categories', [{
      type: 'danger',
      name: 'Alcohol',
      color: '#FE16C2'
    }, {
      type: 'good',
      name: 'Draniki',
      color: '#DDD321'
    }, {
      type: 'somewhat',
      name: 'Test1',
      color: '#00B121'
    }, {
      type: 'excellent',
      name: 'Test2',
      color: '#555555'
    }])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
