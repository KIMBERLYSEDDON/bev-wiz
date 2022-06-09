require("dotenv").config();
const apiKey = process.env.YELP_API_KEY;

const yelpURL = `https://api.yelp.com/v3/businesses/search`;
const axios = require("axios");

async function getEstablishments(req, res) {
  const { latitude, longitude } = req.body;

  try {
    if (latitude && longitude) {
      const response = await axios.get(yelpURL, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        params: {
          latitude: latitude,
          longitude: longitude,
          categories: "nightlife",
          limit: 50,
        },
      });
      res.json(response.data.businesses);
    } else {
      return;
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = getEstablishments;
