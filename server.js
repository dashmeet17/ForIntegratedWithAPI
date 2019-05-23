const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

var mongoose = require('mongoose');
var Transaction = require('./models/transaction');

//const dbURL = 'mongodb+srv://user:user@cluster0-dbicd.mongodb.net/test?retryWrites=true';

const dbURL = 'mongodb://webdiscoverers:Dashmeet17!@ds129770.mlab.com:29770/webdiscoverers';

mongoose.connect(dbURL, function(err){
  if(err){
    console.log('Error connecting to: '+ dbURL)
  }
  else{
    console.log('Connected to: '+ dbURL)
  }
})

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log("yes connected to mlab");

app.get('/customer-transactions', function (req, res) {

  // get all the transactions
  Transaction.find({}, function(err, trxns) {
    if (err) throw err;

    console.log('Transactions from db : '+trxns);
    res.status(200).json(trxns);
  });
})

//Just to add transactions directly from the app
app.post('/add-transaction', function (req, res) {
  //create new transactions
  console.log("request is : "+req.body.transactionID);
  console.log("request is : "+req.body.username);
  console.log("request is : "+req.body.paymentMode);
  console.log("request is : "+req.body.amount);

  var newTransaction = Transaction({
    transactionID: 'TRXN_'+Math.random(),
    username: req.body.username,
    paymentMode: req.body.paymentMode,
    amount: req.body.amount
  });

  // save the transaction
  newTransaction.save(function(err) {
    if (err) throw err;

    console.log('newTransaction created!');
    res.sendStatus(200)
  });
});

app.listen(port, function () {
  console.log('UOB Server app is running at localhost:' + port)
})
