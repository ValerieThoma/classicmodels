var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'x',
	password: 'x',
	database: 'classicmodels'
});

connection.connect((error)=>{
	if(error){
		console.log(error.stack);
		return
	}else{
		console.log("Connected as id" + connection.threadId);
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
	var selectQuery = "SELECT * FROM customers;";
	connection.query(selectQuery, (error, results, fields)=>{
		res.render('index', {results});
	})
});
/* GET offices page. */
router.get('/offices', function(req, res, next) {
	var queryOfficeDetails = "SELECT * FROM offices;";
	connection.query(queryOfficeDetails, (error, results, fields)=>{
		res.render('offices', {results});
	})
});
/* GET customers page. */
router.get('/customers', function(req, res, next) {
	var queryCustsomerDetails = "SELECT * FROM customers;";
	connection.query(queryCustsomerDetails, (error, results, fields)=>{
		res.render('customers', {results});
	})
});
/* GET employees page. */
router.get('/employee', function(req, res, next) {
	var queryEmployeeId = "SELECT employeeNumber FROM employees;";
	connection.query(queryEmployeeId, (error, results, fields)=>{
		res.render('employee', {results});
	})
});

/* GET employee details page. */
router.get('/employee/:employeeNumber', function(req, res, next) {
	var queryEmployeeInfo = `SELECT * FROM employees WHERE employeeNumber = ${req.params.employeeNumber}`;
	// console.log(queryEmployeeInfo);
	connection.query(queryEmployeeInfo, (error, results, fields)=>{
		res.render('employeedetails', {results});
	})
});


module.exports = router;
