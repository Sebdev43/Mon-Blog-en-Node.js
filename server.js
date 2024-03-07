const express = require('express');
const app = express();
const router = require('./app/router');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});