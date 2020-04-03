const mysql = require("mysql");
const db = require("../../db");

const nationalities = async (req, res) => {
  db.query(
    "SELECT name, country FROM participant",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const hatachiSport = async (req, res) => {
  db.query(
    "SELECT P.name, A.age, S.name, P.country \
    FROM participant P, participantsport PS, athlete A, sport S \
    WHERE PS.participant_id = A.participant_id \
    and PS.participant_id = P.participant_id \
    and PS.sport_id = S.sport_id \
    and A.age >= 20 and A.age <= 30",
    (err, result, fields) => {
        if (err) throw err;
        res.json(result);
    }
  );
};

module.exports = {
  nationalities,
  hatachiSport
};
