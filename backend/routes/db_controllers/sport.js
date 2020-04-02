const mysql = require("mysql");
const db = require("../../db");

const newSport = async (req, res) => {
    const { sport } = req.body;

    let insertQuery =
    "INSERT INTO sport (name) VALUES ('??')";
    let query = mysql.format(insertQuery, [sport]);

    console.log(query);
    await db.query(query, (err, resp) => {
        if (err) throw err;
        res.json(resp.insertId)
        
    });

}

module.exports = {
    newSport
}