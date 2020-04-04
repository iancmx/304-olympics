const mysql = require("mysql");
const db = require("../../db");

const newSport = async (req, res) => {
  const { sport } = req.body;

  let insertQuery = "INSERT INTO sport (name) VALUES ('??')";
  let query = mysql.format(insertQuery, [sport]);

  console.log(query);
  await db.query(query, (err, resp) => {
    if (err) throw err;
    res.json(resp.insertId);
  });
};

const allSports = async (req, res) => {
  db.query("SELECT * FROM sport", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const getInfo = async (req, res) => {
  db.query(
    `SELECT * FROM sport WHERE sport_id = ${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const deleteSport = async (req, res) => {
  db.query(
    `DELETE FROM sport WHERE sport_id = ${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const updateSport = async (req, res) => {
  const { sport_id, sport } = req.body;

  let updateQuery = `UPDATE sport SET name = '${sport}' WHERE sport_id = ${sport_id}`;

  console.log(updateQuery);

  db.query(updateQuery, (err, resp) => {
    if (err) throw err;
    res.json(resp.insertId);
  });
};

module.exports = {
  newSport,
  allSports,
  getInfo,
  deleteSport,
  updateSport
};
