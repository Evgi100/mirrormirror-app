const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');


app.use(express.static('./server/static/'));
app.use(express.static('./server/static/uploads'));
app.use(express.static('./client/dist/'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));


var storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './server/static/uploads');
	},
	filename: function (req, file, callback) {
		// console.log(file);
		callback(null, file.fieldname + '-' + Date.now() + '.jpeg');
	}
});

var upload = multer({ storage: storage }).array('outfitpicture');
// app.use(express.static('server/staticeventpics'));


////////////PRODUTION CONNECTION////////////////

// const connection = mysql.createConnection({
// 	host: '35.203.149.151',
// 	user: 'olinsoffer',
// 	password: '1234',
// 	database: 'mirrormirror'
// });

////////////////DEVELOPMENT DATABASE INIT//////////////////
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'mirrormirror',
	multipleStatements: true
});
//
// connection.connect(function(err) {
//     if (err) throw err
// });

function createDataBase() {
	connection.query("CREATE DATABASE mirrormirror", function (err, result) {
		if (err) throw err;
		console.log("mirrormirror database created");
		// connection.end();
		connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'password22',
			database: 'mirrormirror',
			multipleStatements: true
		});
		// connection.connect(function(err) {
		// 	if (err) throw err
		// 	console.log('connection created11111111111111');
		// });
	});

}

// FOREIGN KEY(department_id) REFERENCES departments(department_id)
function createTables() {

	let userTable = `CREATE TABLE user_table (
		userID int NOT NULL AUTO_INCREMENT,
		userName VARCHAR(255), 
		age int,
		location varchar(255),
		gender varchar(255) NOT NULL,
		occupation varchar(255),
		PRIMARY KEY (userID)
	 )`;

	let eventTable = `CREATE TABLE event_table (
		eventID int  AUTO_INCREMENT,
		userID int,
		event varchar(255),
		eventDate Date,
		PRIMARY KEY (eventID),
		FOREIGN KEY(userID) REFERENCES user_table(userID)
	)`;

	let outfitTable = `CREATE TABLE outfit_table (
		outfitID int AUTO_INCREMENT, 
		eventID int,
		picture varchar(255),
		rating int,
		PRIMARY KEY (outfitID),
		FOREIGN KEY(eventID) REFERENCES event_table(eventID)
	 )`;

	function _formatSqlCommands(sqlArr) {
		let result = '';
		sqlArr.forEach(function (element, index, array) {
			result += `${element}; `
		});
		console.log(result);
		return result;
	}

	let sqlTables = [userTable, eventTable, outfitTable];

	// _formatSqlCommands(sqlTables);
	let sql = _formatSqlCommands(sqlTables);
	connection.query(sql, function (err, results) {
		// results.forEach(function (result) {
		// 	console.log(result);
		// });
		console.log(results);
		if (err) throw err;
		console.log("Table created");
	});
}

function initDatabase() {
	// createDataBase();
	createTables();
}

// connection.connect(function (err) {
// 	if (err) throw err
// 	console.log('connection created11111111111111');
// 	initDatabase();
// });
//////////////////END OF FOR DEV DATABASE INIT//////////////////////////












/////////////////////////////////////////ROUTES/////////////////////////////////

//////////////////USERS ROUTES///////////////////

//Gets all users from the database
app.get('/users', function (req, res, next) {
	connection.query("SELECT * from user_table", function (err, rows, fields) {
		if (err) throw error;
		console.log(`/userS get req was done succ`);
		res.send(rows);
	});
});
//Gets one user from the database based on username
app.get('/user/:username', function (req, res, next) {
	let username = req.params.username;
	let where = { userName: username };
	// console.log(username);
	connection.query(`SELECT * from user_table WHERE ?`, where, function (err, rows, fields) {
		if (err) throw error;
		console.log(`/useR get req was done succ`);
		res.send(rows);
	});
});
//Adds user to database
app.post('/users', function (req, res) {
	let userData = req.body;
	connection.query(`INSERT INTO user_table SET ?`, userData, function (err, result) {
		if (err) throw err;
		console.log('user was added');
		let username = userData.userName;
		console.log(userData.userName, username);
		connection.query(`SELECT * from user_table WHERE ?`, { userName: username }, function (err, rows, fields) {
			if (err) throw err;
			res.send(rows);
		})
	});
});
//Updates user in database
app.put('/user', function (req, res) {
	let keys = Object.keys(req.body);
	let dataToUpdate = {};
	keys.forEach((key, index, arr) => {
		if (key !== 'userName') dataToUpdate[key] = req.body[key];
	})
	let username = req.body.userName;
	// console.log(dataToUpdate, username)
	connection.query(`UPDATE user_table SET ? WHERE ?`, [dataToUpdate, { userName: username }], function (err, result) {
		if (err) throw err;
		console.log(result);
		connection.query(`SELECT * from user_table WHERE ?`, username, function (err, rows, fields) {
			if (err) throw err;
			res.send(rows);
		})
	});
});
//Deletes user from database
app.delete('/user/:username', function (req, res) {
	let username = req.body.username || req.params.username;
	let sql = `DELETE FROM user_table WHERE ?`;
	connection.query(sql, { userName: username }, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
})
///////////END OF USER ROUTES////////////







//////////EMPTY SPACE/////////////









/////////////////EVENT ROUTES//////////////
//Gets all events from the database
app.get('/events', function (req, res, next) {
	connection.query("SELECT * from event_table", function (err, rows1, fields1) {
		if (err) throw error;
		console.log(`/eventS get req was done succ`);
		let sql = `SELECT *
		FROM event_table
		INNER JOIN outfit_table on event_table.eventID = outfit_table.eventID`;
		connection.query(sql, function (err, rows2, fields2) {
			if (err) throw error;
			// console.log(rows1,rows2);
			res.send(formatData(rows1,rows2));
		});
	});
	function formatData(rows1, rows2) {
		// let result = {};
		for(let i =0, l = rows1.length; i<l; i++) {
			let row1 = rows1[i];
			let eventID = row1.eventID;
			row1.outfits = [];
			for(let j =0, l =rows2.length; j<l; j++) {
				let row2 = rows2[j];
				let outfitEventID = row2.eventID
				if(eventID === outfitEventID) {
					row1.outfits.push(row2)
				}
			}
		}
		return rows1;
	}
});
//Gets one event from the database based on username
app.get('/event/:id', function (req, res, next) {
	let id = req.params.id;
	let where = { eventID: id };
	// console.log(username);
	connection.query("SELECT * from event_table WHERE ?", where, function (err, rows1, fields) {
		if (err) throw error;
		console.log(`/evenT get req was done succ`);
		// res.send(rows);
		let sendDataSQL = mysql.format(
			`SELECT	outfit_table.outfitID, outfit_table.picture, outfit_table.rating
		FROM event_table
		INNER JOIN outfit_table on event_table.eventID = outfit_table.eventID
		WHERE event_table.eventID =?`, [id]);
		// console.log(sendDataSQL);
		// rows1.outfits = [];
		connection.query(sendDataSQL, function (err, rows2, fields) {
			if (err) throw err;
			// rows1.outfits.push(JSON.stringify(rows2));
			console.log(rows1);
			// rows1.outfits = rows2;
			res.send({
				event: rows1,
				outfits: rows2
			});
		});
	});
});
//Adds event to database
app.post('/events', function (req, res) {
	let userData = req.body;
	console.log(userData);
	connection.query(`INSERT INTO event_table SET ?`, userData, function (err, result) {
		if (err) throw err;
		console.log('event was addedd');
		// console.log(result);
		let whereSQL = { eventID: result.insertId };
		connection.query(`SELECT * from event_table WHERE ?`, whereSQL, function (err, rows, fields) {
			if (err) throw err;
			console.log(rows);
			res.send(rows);
		})
	});
});
//Updates event in database
app.put('/event', function (req, res) {
	let keys = Object.keys(req.body);
	let dataToUpdate = {};
	keys.forEach((key, index, arr) => {
		if (key !== 'userName') dataToUpdate[key] = req.body[key];
	})
	let username = req.body.userName;
	// console.log(dataToUpdate, username)
	connection.query(`UPDATE event_table SET ? WHERE ?`, [dataToUpdate, { userName: username }], function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
});
//Deletes event from database
app.delete('/event/:id', function (req, res) {
	let id = req.params.id;
	let sql = `DELETE FROM event_table WHERE ?`;
	let deleteOutfitSQL =
		`SELECT picture
	FROM  outfit_table
	WHERE ?
	INNER JOIN event_table ON outfit_table.eventID = event.CustomerID`
	connection.query(`SELECT `);
	connection.query(sql, id, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
})

// app.post('/photo', function (req, res) {
// 	upload(req, res, function (err) {
// 		if (err) {
// 			console.log(err);
// 			console.log('yoioioioioioioi');
// 			return res.end("Error uploading file.");
// 		}
// 		console.log('oooooooooooooooooooooo')
// 		console.log(req);
// 		// const host = req.host;
// 		// const filePath = req.protocol + "://" + host + '/' + req.file.path;
// 		// console.log(filePath);
// 		res.end('filePath');
// 	});
// });
/////////////////END OF EVENT ROUTES//////////////














//////////////////OUTFIT ROUTES//////////////////////
//Gets all outfits from the database
app.get('/outfits', function (req, res, next) {
	connection.query("SELECT * from outfit_table", function (err, rows, fields) {
		if (err) throw error;
		console.log(`/outfitS get req was done succ`);
		res.send(rows);
	});
});
//Gets one outfit from the database based on username
app.get('/outfit/:id', function (req, res, next) {
	let username = req.params.username;
	let where = { userName: username };
	// console.log(username);
	connection.query("SELECT * from outfit_table WHERE ?", where, function (err, rows, fields) {
		if (err) throw error;
		console.log(`/outfit get req was done succ`);
		res.send(rows);
	});
});
//Adds outfit to database
app.post('/outfits/:eventID', function (req, res) {
	upload(req, res, function (err) {
		if (err) {
			console.log(err);
			return res.end("Error uploading file.");
		}
		console.log('images were uploaded to uploads folder');
		let toSend = [];
		let userData = req.body;
		userData.eventID = req.params.eventID;
		let outfitsCounter = 0;
		let eventID = userData.eventID;
		req.files.forEach(function (image) {
			const host = req.hostname;
			const filePath = `${req.protocol}://${host}/${image.path}`;
			console.log(host)
			console.log(image.path);
			console.log(req.protocol);
			console.log(image);
			userData.picture = image.filename;
			connection.query(`INSERT INTO outfit_table SET ?`, userData, function (err, result) {
				if (err) throw err;
				console.log('outfit was added');
				toSend.push(result);
				outfitsCounter++;
				console.log(outfitsCounter);
				if (outfitsCounter === req.files.length) {
					console.log(outfitsCounter, req.files.length);
					sendData()
				}
			});
		});


		function sendData() {
			let sendDataSQL = mysql.format(
				`SELECT	outfit_table.outfitID, outfit_table.picture, outfit_table.rating
			FROM event_table
			INNER JOIN outfit_table on event_table.eventID = outfit_table.eventID
			WHERE event_table.eventID =?`, [eventID]);
			console.log(sendDataSQL);
			connection.query(sendDataSQL, function (err, rows, fields) {
				if (err) throw err;
				console.log(rows);
				res.send(rows);
			});
		}
	});
});

//Updates outfit in database
app.put('/outfit', function (req, res) {
	let keys = Object.keys(req.body);
	let dataToUpdate = {};
	keys.forEach((key, index, arr) => {
		if (key !== 'outfitID') dataToUpdate[key] = req.body[key];
	})
	let outfitID = req.body.outfitID;
	// console.log(dataToUpdate, username)
	connection.query(`UPDATE outfit_table SET ? WHERE ?`, [dataToUpdate, { outfitID: outfitID }], function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
});
//Deletes outfit from database
app.delete('/outfit', function (req, res) {
	let username = req.body;
	let sql = `DELETE FROM outfit_table WHERE ?`;
	connection.query(sql, username, function (err, result) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
})

//////////////END OF OUTFIT ROUTES/////////////

//////////////////////////////////END OF ROUTES//////////////////////////////////



//Handle browser refresh by redirecting to index html
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './server/static/index.html'))
})



// console.log( path.join(__dirname, './server/static/index.html'));

// start the server
app.listen(process.env.PORT || '3000', () => {
	console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});