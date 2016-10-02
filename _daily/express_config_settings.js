/*

    To set settings: app.set('name', value); app.enable('name'); app.disable('name');
    To get settings: app.get('name'), app.set('name'); app.enabled('name'); ..

    A setting value can be of any type: number, boolean, string, function

    Express has a number of built in settings (see below), but you can define your own,
    just do app.set('anything_you_want', false);

 */

var book = {name: 'Practical Node.js',
    publisher: 'Apress',
    keywords: 'node.js express.js mongodb websocket oauth',
    discount: 'PNJS15'
}
var express = require('express'),
    path = require('path');

var app = express();

// env is set to the system value process.env.NODE_ENV or if that's not set, 'development'
console.log(app.get('env'));

// caches templates - set to false by default if env == development
app.set('view cache', true);

//absolute path to folder containing views
app.set('views', path.join(__dirname, 'views'));

//the file extension of template files
app.set('view engine', 'jade');


app.set('port', process.env.PORT || 3000);

//use if node is running behind a reverse proxy such as varnish or nginx
//trusts the X-Forwarded-* headers
app.set('trust proxy', true);

//There are two ways to allow ajax calls from disparate domains to hit our server.
//Either enable a CORS header on the server, or server JSONP, which wraps the response data
//in a function call. this setting specifies the name of that wrapper function.
app.set('jsonp callback name', 'cb');

// functions that are run when returning json. The replacer runs for each key value pair,
// and if you return undefined, this kvp is omitted from the result json
app.set('json replacer', function(key, value){
    if (key === 'discount')
        return undefined;
    else
        return value;
});

//functions that are run when returning json. This controls indentation size.
app.set('json spaces', 4);

// /hElLo is different to /hello
app.set('case sensitive routing', true);

// is trailing slash important? if true, /hello is different to /hello/
// false by default
app.set('strict routing', true);

//ensure x-powered-by header is not sent. Best switched off for security reasons
app.set('x-powered-by', false);

// if our domain is http://engineering.compsci.shu.org and we run the below, the express
// 'subdomain' setting is just engineering (usually it would be engineering.compsci).
app.set('subdomain offset', 3);

//etag is a unique ID for content on a url. this only changes when the content changes, allowing browsers
// to do good caching. Leave it on most of the time.
// app.disable('etag')

//if needed, you can disable querystring parsing (populates req.query). You can also pass in your own function
//to do the parsing
// app.set('query parser', false);

app.get('/jsonp', function(request, response){
    response.jsonp(book);
})
app.get('/json', function(request, response){
    response.send(book);
})
app.get('/users', function(request, response){
    response.send('users');
})
app.get('/users/', function(request, response){
    response.send('users/');
})
app.get('*', function(request, response){
    response.send('Pro Express.js Configurations');
})

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});