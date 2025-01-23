import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const app = express();
const port = 3000;

import route from './routes/index.js';

//connect to db
import connect from './config/db/index.js';
connect();

//static file
app.use(express.static('src/public'));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP request logger
app.use(morgan('combined'));

//template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resource/views');

//routes init
route(app);

//this is a test.....

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
