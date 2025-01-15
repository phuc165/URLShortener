import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const app = express()
const port = 3000

//HTTP request logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/resource/views');

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})