const mysql = require("mysql");
const db = require("../../db");

const handleLogin = async (req, res) => {
	const { login, password } = req.body;

	let query = "SELECT user_id \
	FROM user\
	WHERE login = '??' \
	AND password = '??' ";

	query = mysql.format(query, [login, password]);

	console.log(query);

	db.query(
		query,
		(err, result, fields) => {
			if (err) throw err;
			res.json(result);
		}
	  );

};

const handleRegister = async (req, res) => {
  const { login, password, permission } = req.body;

  if (login == null | password == null | permission == null) {
	  return res.json("Failed to register, missing parameter");
  }

  let insertQuery =
    "INSERT INTO user (login, password, permission) VALUES ('??', '??', FALSE)";
  if (permission == "true" | permission == "True"){
	insertQuery =
    "INSERT INTO user (login, password, permission) VALUES ('??', '??', TRUE)";
  }

  let query = mysql.format(insertQuery, [
	login,
	password,
	final_perm
  ]);

  console.log(query)
  
  db.query(query, (err, res) => {
    if (err) throw err;
    res.json(res.insertId);
  });

};

module.exports = {
  handleLogin,
  handleRegister,
};
