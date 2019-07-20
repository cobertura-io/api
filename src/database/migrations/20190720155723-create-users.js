'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      pk_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      surname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birth: {
        allowNull: true,
        type: Sequelize.DATE
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: true,
        type: Sequelize.STRING
      },
      rg: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fk_gender: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'Genders',
          key: 'pk_gender'
        }
      },
      monther_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      admin: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      avatar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      url_profile: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email_verified: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Genders')
  }
};
