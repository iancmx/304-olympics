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
    participant_id,
  } = req.body || {};

  const sum =
    parseInt(gold_medal_count) +
    parseInt(silver_medal_count) +
    parseInt(bronze_medal_count);

  await db.query(
    `SELECT * FROM medalcount \
  WHERE gold_medal_count = ${gold_medal_count} \
AND silver_medal_count = ${silver_medal_count} \
AND bronze_medal_count = ${bronze_medal_count} `,
    async (err, result) => {
      if (err) throw err;
      if (!result[0]) {
        let insertMCquery = `INSERT INTO medalcount VALUES (${gold_medal_count}, ${silver_medal_count}, ${bronze_medal_count}, ${sum})`;
        console.log(insertMCquery);
        await db.query(insertMCquery, (err, res) => {
          if (err) throw err;
        });
      }
      let insertQuery = `INSERT INTO athlete (age, sex, weight, height, gold_medal_count, silver_medal_count, bronze_medal_count, participant_id) VALUES (${age}, "${sex}", ${weight}, ${height}, ${gold_medal_count}, ${silver_medal_count}, ${bronze_medal_count}, ${participant_id})`;

      console.log(insertQuery);

      db.query(insertQuery, (err, resp) => {
        if (err) throw err;
        res.json(resp.insertId);
      });
    }
  );
};

const updateAthlete = async (req, res) => {
  const {
    athlete_id,
    age,
    sex,
    weight,
    height,
    gold_medal_count,
    silver_medal_count,
    bronze_medal_count,
    participant_id,
  } = req.body || {};

  const sum =
    parseInt(gold_medal_count) +
    parseInt(silver_medal_count) +
    parseInt(bronze_medal_count);

  await db.query(
    `SELECT * FROM medalcount \
  WHERE gold_medal_count = ${gold_medal_count} \
AND silver_medal_count = ${silver_medal_count} \
AND bronze_medal_count = ${bronze_medal_count} `,
    async (err, result) => {
      if (err) throw err;
      if (!result[0]) {
        let insertMCquery = `INSERT INTO medalcount VALUES (${gold_medal_count}, ${silver_medal_count}, ${bronze_medal_count}, ${sum})`;
        console.log(insertMCquery);
        await db.query(insertMCquery, (err, res) => {
          if (err) throw err;
        });
      }
      let updateQuery = `UPDATE athlete SET age = ${age}, sex = "${sex}", weight = ${weight}, height = ${height}, gold_medal_count = ${gold_medal_count}, silver_medal_count = ${silver_medal_count}, bronze_medal_count = ${bronze_medal_count} WHERE athlete_id = ${athlete_id}`;

      console.log(updateQuery);

      db.query(updateQuery, (err, resp) => {
        if (err) throw err;
        res.json(resp.insertId);
      });
    }
  );

};

const deleteAthlete = async (req, res) => {
  db.query(`DELETE FROM athlete WHERE athlete_id = ${req.params.id}`, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });

};

const getInfo = async (req, res) => {

  db.query(`SELECT * FROM athlete WHERE athlete_id = ${req.params.id}`, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const allAthletes = async (req, res) => {
  db.query("SELECT * FROM athlete", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const numAthleteAgeCountry = async (req, res) => {
  db.query(
    "SELECT P.country AS country, COUNT(*) AS number_of_athletes, AVG(A.age)AS average FROM athlete A, participant P WHERE A.participant_id = P.participant_id  GROUP BY P.country;",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

module.exports = {
  newAthlete,
  updateAthlete,
  deleteAthlete,
  getInfo,
  allAthletes,
  numAthleteAgeCountry,
};
