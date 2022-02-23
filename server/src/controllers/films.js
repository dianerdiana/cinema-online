const { tb_films } = require("../../models");

exports.getFilm = async (req, res) => {

  const id = req.params.id

  try {

    const film = await tb_films.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    })

    res.send({
      status: "success",
      data: {
        film
      }
    })
    
  } catch (error) {
    console.log(error)
  }
}