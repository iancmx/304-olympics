const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
// const mysql = require('mysql');
const userRoutes = require('./routes/user_routes');
const dbRoutes = require('./routes/db_routes');
const app = express();

try {
	const db = oracledb.getConnection({
		connectString: 'dbhost.students.cs.ubc.ca:1521:stu',
		user: 'ora_iancmx',
		password: 'a74260878'
	})
	console.log("Successfully connected to Oracle!")
} catch (err) {
	console.log("Error: ", err);
} finally {
	if (connection) {
		try {
		  await connection.close();
		} catch(err) {
		  console.log("Error when closing the database connection: ", err);
		}
	}
}


app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/db', dbRoutes);

const port = 3000;


app.listen(port, () => {
	console.log('Server is running on port 3000');
})