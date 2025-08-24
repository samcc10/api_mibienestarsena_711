'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Events', {
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'event_categorie_association',
      references: {
        table: 'Categories',
        field: 'id'
      },
      onDelete: 'RESTRICT',  
      onUpdate: 'CASCADE'   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Events', 'event_categorie_association');
  }
};