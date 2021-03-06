const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const cors = require('cors');

const router = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, '/images')));

app.get('/', async (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.use('/user', router.userRouter);
app.use('/login', router.loginRouter);
app.use('/sales', router.salesRouter);
app.use('/products', router.productsRouter);
app.use('/chat', router.chatRouter);

module.exports = app;
