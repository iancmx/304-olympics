const mysql = require("mysql");
const db = require("../../db");

const newAthlete = async (req, res) => {
  const {
    age,
    sex,
    weight,
    height,
    gold_medal_count,
    silver_medal_count,
    bronze_medal_count,
    participant_id
  } = req.body || {};

  let insertQuery =
    `INSERT INTO athlete (age, sex, weight, height, gold_medal_count, silver_medal_count, bronze_medal_count, participant_id) VALUES (${age}, '${sex}', ${weight}, ${height}, ${gold_medal_count}, ${silver_medal_count}, ${bronze_medal_count}, ${participant_id})`;

  console.log(insertQuery);

  db.query(insertQuery, (err, res) => {
    if (err) throw err;
    res.json(res.insertId);
  });
};

const updateAthlete = async (req, res) => {};

const deleteAthlete = async (req, res) => {};

const getInfo = async (req, res) => {};

const allAthletes = async (req, res) => {
  db.query("SELECT * FROM athlete", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const numAthleteAgeCountry = async (req, res) => {
  db.query("SELECT P.country, COUNT(*) AS number_of_athletes, AVG(A.age) FROM athlete A, participant P WHERE A.participant_id = P.participant_id  GROUP BY P.country;", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  newAthlete,
  updateAthlete,
  deleteAthlete,
  getInfo,
  allAthletes,
  numAthleteAgeCountry
};
