var app = require('./app').init(4000);

var locals = {
        title: 		 'Boston Startup School',
        description: 'Learn what it takes to make an impact.  Join the next big thing.',
        author: 	 'Evan Morikawa & Alex Hugon'
    };

app.get('/', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('template.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});