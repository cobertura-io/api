'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Genders', {
      pk_gender: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Genders')
  }
};
