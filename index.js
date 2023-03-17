const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

app.use(express.static('styles'));

app.use(express.static('media'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(__dirname + '/html/home')
});

app.get('/cart/', (req, res) => {
    res.render(__dirname + '/html/cart')
})

app.get('/checkout/', (req, res) => {
    res.render(__dirname + '/html/checkout')
})

app.use(express.static('html'));

const PORT = process.env.PORT || 4020;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));