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

const participateAllSports = async (req, res) => {
  let query =
    "SELECT nationality \
    FROM nationalitycolor NC\
    WHERE not exists (SELECT S.sport_id FROM sport S\
                    EXCEPT \
                    SELECT P.sport_id FROM participant P, athlete A WHERE NC.nationality = P.country and P.participant_id = A.participant_id)"; 
  console.log(query);
  await db.query(query, (err, resp) => {
    if (err) throw err;
    res.json(resp);
  });
};

module.exports = {
  atLeastOneGold,
  mostGoldMedals,
  participateAllSports
};
