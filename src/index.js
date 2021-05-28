

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const morgan = require('morgan');

const app = express();
const port = 3000

app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname,'public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.render('home', { layout: false });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})