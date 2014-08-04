require('newrelic');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.logger());


mongoose.connect(process.env.MONGOHQ_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});
app.configure( function() {
		app.use(express.bodyParser() );
		app.use(express.static(__dirname + '/public' ) );
});

var fs = require('fs');
var htmlfile = "index.html";
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
//  response.send(fs.readFileSync('index.html').tostring());
});
/*
app.use('/', function(req, res) {
		var QuizResult = new Object({
				id: String,
				policy: String,
				q1:  Number,
				q2: Number,
				q3: Number,
				q4: Number,
				q5: Number,
				q6: Number,
				q7: Number,
				q8: Number,
				q9: Number,
				q10: Number
		});
		var Quiz =mongoose.model("QuizData", QuizResult);
		var newQuizTaken = new Quiz
		newQuizTaken.save()
});
*/
app.use(express.static(__dirname + '/public')); // just added for static files
app.get('/about', function (req, res)
{
    res.render('about.html');
});
app.get('/quiz', function (req, res)
{
    res.render('quiz.html');
});
app.get('/staff', function (req, res)
{
    res.render('staff.html');
});
app.get('/support', function (req, res)
{
    res.render('support.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
