'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      document: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.BOOLEAN
      },
      rolId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rols',       // Nombre de la tabla referenciada
          key: 'id'            // Llave primaria de la tabla Rols
        },
        onUpdate: 'CASCADE',   // Actualizar en cascada
        onDelete: 'RESTRICT'   // Restringir eliminación
      },
      passwordRestToken: {
        type: Sequelize.STRING
      },
      passwordRestExpires: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};