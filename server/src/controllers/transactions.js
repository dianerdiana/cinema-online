const { tb_transactions, tb_users, tb_films } = require("../../models");
const { Op } = require("sequelize");

exports.getTransaction = async(req, res) => {

  const userId = req.user.id
  const filmId = req.params.id


  try {

    const bill = await tb_transactions.findOne({
      where: {
        [Op.and]: [{userId}, {filmId}]
      },
      include: [{
        model: tb_users,
        as: "buyer",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password", "status"]
        }
      }, {
        model: tb_films,
        as: "film",
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      }],
      attributes: {
        exclude: ["createdAt", "updatedAt", "orderDate"]
      }
    })

    res.send({
      message: "success",
      data: {
        bill
      }
    })
    
  } catch (error) {
    console.log(error)
  }
}

exports.getAllTransactions = async(req, res) => {
  
  try {
    
    const bill = await tb_transactions.findAll({
      include: [{
        model: tb_users,
        as: "buyer",
        attributes: {
          exclude: ["createdAt", "updatedAt", "password", "status"]
        }
      }, {
        model: tb_films,
        as: "film",
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      }],
      attributes: {
        exclude: ["createdAt", "updatedAt", "orderDate"]
      }
    })

    res.send({
      message: "success",
      data: {
        bill
      }
    })

  } catch (error) {
    console.log(error)
  }
}