import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const app = express()
const port = 3000

app.use(express.static('src/public'));

//HTTP request logger
app.use(morgan('combined'))

//template engine
app.engine('.hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resource/views');

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})