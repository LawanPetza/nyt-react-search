const axios = require("axios");
const db = require("../models")

module.exports = {
    findAll: function(req, res){
// get URL from NYT 
        axios
        .get("", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
     }
};
// const params = { }
// const param = Object.assign({ api_key: "INSERT_API_KEY"} req.query );
