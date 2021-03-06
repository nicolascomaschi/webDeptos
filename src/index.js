const express = require('express');
const app = express();
const path = require('path');

////settings////
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
//combierte extencion .ejs en .html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

////routes////
app.use(require('./routes/routes'));

////middlewares////

////static files////
app.use(express.static(path.join(__dirname,'public')));

////listenig the server////
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});