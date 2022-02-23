'use strict';
const {
  Model
} = require('sequelize');
const tb_transactions = require('./tb_transactions');
module.exports = (sequelize, DataTypes) => {
  class tb_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_users.hasMany(models.tb_transactions, {
        foreignKey: {
          name: "userId"
        }
      })
    }
  }
  tb_users.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.ENUM("customer", "admin")
  }, {
    sequelize,
    modelName: 'tb_users',
  });
  return tb_users;
};