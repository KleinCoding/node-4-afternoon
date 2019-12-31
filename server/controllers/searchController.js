const swag = require('../models/swag')

module.exports = {
    search: (req, res) => {
      const { category } = req.query;
      if (!category) {
        res.status(200).send(swag);
        console.log("Searching: no category")
      } else {
        const filteredSwag = swag.filter(swag => swag.category === category);
        res.status(200).send(filteredSwag);
        console.log(`Searching: returning ${req.query.category}`)
      }
    }
  };