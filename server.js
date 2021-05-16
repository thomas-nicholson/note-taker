const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const path = require('path');

app.use(express.static(__dirname + "/public"));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));

});

app.post('/api/notes', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});