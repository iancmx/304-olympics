const mysql = require("mysql");
const db = require("../../db");

const atLeastOneGold = async (req, res) => {
  let query =
    "SELECT country_name, gold_medal_count \
    FROM countrymedal \
    WHERE gold_medal_count > 0 \
    ORDER BY country_name asc";

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
        FROM countrymedal C)\
    ORDER BY country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const participateAllSports = async (req, res) => {
  let query =
    "SELECT nationality \
    FROM nationalitycolor NC \
    WHERE not exists (SELECT S.sport_id FROM sport S WHERE S.sport_id NOT IN( \
              SELECT PS.sport_id FROM participant P, athlete A, participantsport PS \
                        WHERE NC.nationality = P.country and P.participant_id = PS.participant_id and P.participant_id = A.participant_id))\
    ORDER BY nationality asc";
  console.log(query);
  await db.query(query, (err, resp) => {
    if (err) throw err;
    res.json(resp);
  });
};

const allCountries = async (req, res) => {
  db.query("SELECT * FROM countrymedal", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const getInfo = async (req, res) => {

  db.query(`SELECT * FROM countrymedal WHERE country_name = '${req.params.name}'`, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const deleteCountry = async (req, res) => {
  db.query(`DELETE FROM countrymedal WHERE country_name = '${req.params.name}'`, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });

};

module.exports = {
  atLeastOneGold,
  mostGoldMedals,
  participateAllSports,
  allCountries,
  getInfo,
  deleteCountry
};
