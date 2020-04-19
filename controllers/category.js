const Category = require('../models/category')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.create = (req, res) => {
  const category = new Category({
    name: req.body.name,
  })
  category.save((err, data) => {
    // console.log(err.message)
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json({ data })
  })
}
