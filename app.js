var express = require('express'),
	app = express(),
	compression = require('compression'),
	exphbs = require('express-handlebars'),
	home = require('./controllers/home');

var hbs = exphbs.create({
	helpers: require('handlebars-helpers')()
});

app.engine('html', exphbs());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(compression());

// app.use("/manifest.json", express.static(__dirname + '/manifest.json'));
app.use('/static', express.static('static'));

app.use('/', home);

app.listen(process.env.PORT || 3000, () => {
	console.info('Started');
});
