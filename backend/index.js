const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const userRoutes = require('./routes/user_routes');
const dbRoutes = require('./routes/db_routes');
const app = express();


const db = mysql.createConnection({
	host: 'dbhost.students.cs.ubc.ca:1522/stu',
	user: 'ora_iancmx',
	password: 'a74260878'
})

db.connect(function(err) {
	if (err) {
	  console.error('error connecting: ' + err.stack);
	  return;
	}
   
	console.log('connected as id ' + connection.threadId);
  });

app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/db', dbRoutes);

const port = 3000;


app.listen(port, () => {
	console.log('Server is running on port 3000');
})