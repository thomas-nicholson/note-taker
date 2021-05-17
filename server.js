const express = require("express");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 8080;

const path = require('path');

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());

app.use(express.json());



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
    fs.readFile("./db/db.json", function(err, json) {
        var array = JSON.parse(json);
        var newNote = req.body;
        newNote.id = array.length;
        array.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(array), function(err) {
            if (err) {
                console.log(err);
                return;
            }
            res.end('{"msg": "success"}');
        });
    });
});

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});