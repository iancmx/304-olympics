const mysql = require("mysql");
const db = require("../../db");

const newAthlete = async (req, res) => {
  const {
    athlete_id,
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
    "INSERT INTO athlete VALUES (??, ??, ??, ??, ??, ??, ??, ??, ??)";
  let query = mysql.format(insertQuery, [
    athlete_id,
    age,
    sex,
    weight,
    height,
    gold_medal_count,
    silver_medal_count,
    bronze_medal_count,
    participant_id
  ]);

  console.log(query);

  db.query(query, (err, res) => {
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

module.exports = {
  newAthlete,
  updateAthlete,
  deleteAthlete,
  getInfo,
  allAthletes
};
