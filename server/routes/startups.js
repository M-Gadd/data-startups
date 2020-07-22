const data = require("../data");

// Get "/startups" endpoint
const getStartups = async (req, res) => {
  if (data) {
    res.status(200).json(data);
  }
};

module.exports = { getStartups };
