const mysql = require("mysql");
const db = require("../../db");

const atLeastOneGold = async (req, res) => {
  let query =
    "SELECT country_name, gold_medal_count \
    FROM countrymedal \
    WHERE gold_medal_count > 0";

  console.log(query);
  await db.query(query, (err, resp) => {
    if (err) throw err;
    res.json(resp);
  });
};

const mostGoldMedals = async (req, res) => {
  db.query(
    "SELECT country_name, gold_medal_count \
    FROM countrymedal \
    WHERE gold_medal_count = (\
        SELECT MAX(C.gold_medal_count) \
        FROM countrymedal C)",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

module.exports = {
  atLeastOneGold,
  mostGoldMedals
};
