const models = require('./../database/models')
const Gender = models.Genders

module.exports = {
  async all(req, res) {
    Gender.findAll().then(genders => {
      return res.json(genders)
    }).catch(err => {
      return res.send(err)
    })
  },

  async getById(req, res) {
    Gender.findOne({ where: { pk_gender: req.params.id } }).then(gender => {
      return res.json(gender)
    }).catch(err => {
      return res.send(err)
    })
  },

  async deleteById(req, res) {
    Gender.destroy({ where: { pk_gender: req.params.id } }).then(gender => {
      if (gender === 1)
        return res.status(200).json({ message: 'Gênero deletado com sucesso' })

      return res.status(200).json({ message: 'Não foi possível deletar o Gênero' })
    }).catch(err => {
      return res.send(err)
    })
  },

  async create(req, res) {
    if (req.body.name === undefined || req.body.name === "")
      return res.status(200).json({ message: 'É obrigatório informar nome do gênero' })

    Gender.create({ name: req.body.name })
      .then(gender => {
        return res.status(201).json({ gender: gender.name, message: 'Gênero criado com sucesso' })
      })
      .catch(err => {
        return res.send(err)
      })
  }
}