'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_transactions.belongsTo(models.tb_users, {
        as: "buyer",
        foreignKey: {
          name: "userId"
        }
      })

      tb_transactions.belongsTo(models.tb_films, {
        as: "film",
        foreignKey: {
          name: "filmId"
        }
      })
    }
  }
  tb_transactions.init({
    userId: DataTypes.INTEGER,
    filmId: DataTypes.INTEGER,
    status: DataTypes.ENUM("Pending", "Approve", "Cancel"),
    accountNumber: DataTypes.INTEGER,
    transferProof: DataTypes.STRING,
    orderDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tb_transactions',
  });
  return tb_transactions;
};