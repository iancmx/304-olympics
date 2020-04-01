const mysql = require('mysql');

const db = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
    password: '3L1te_1414',
    database: 'olympics'
})

db.connect((err) => {
	if (err) {
		console.error('connection error', err.stack);
	} else {
		console.log('connected');
	}

})

module.exports = db;