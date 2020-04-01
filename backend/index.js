const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const userRoutes = require('./routes/user_routes');
const dbRoutes = require('./routes/db_routes');
const app = express();

const db = new pg.Client({
	host: '127.0.0.1',
	user: 'iancmx',
	port:'5432'
})

db.connect((err) => {
	if (err) {
		console.error('connection error', err.stack);
	} else {
		console.log('connected');
	}

})

app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/db', dbRoutes);

const port = 3000;


app.listen(port, () => {
	console.log('Server is running on port 3000');
})