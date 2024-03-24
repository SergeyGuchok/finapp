module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Colors', [{
      color: '#FF598E'
    },{
      color: '#FF5965'
    },{
      color: '#FFA041'
    },{
      color: '#FFD541'
    },{
      color: '#E9FF41'
    },{
      color: '#ADFF41'
    },{
      color: '#33DFAC'
    },{
      color: '#33DFD9'
    },{
      color: '#4ED1F8'
    },{
      color: '#4EAEF8'
    },{
      color: '#4E65F8'
    },{
      color: '#A772FE'
    },{
      color: '#C872FE'
    },{
      color: '#F272FE'
    }])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Colors', null, {})
  }
};
