'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    birth: DataTypes.DATE,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    fk_gender: DataTypes.INTEGER,
    monther_name: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING,
    url_profile: DataTypes.STRING,
    email_verified: DataTypes.BOOLEAN
  }, {})

  User.associate = function (models) {
    User.belongsTo(models.Genders, { foreignKey: 'fk_gender', as: 'gender' })
  }

  return User
}