'use strict'
module.exports = (sequelize, DataTypes) => {
  const Genders = sequelize.define('Genders', {
    pk_gender: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
  }, {
      sequelize
    })

  Genders.associate = function (models) {
    Genders.hasMany(models.User, { as: 'gender' })
  };

  return Genders
}