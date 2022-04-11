'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('addresses', 'businessId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'businesses',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('addresses', 'businessId')
  }
}