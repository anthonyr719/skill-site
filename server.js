const express = require('express');
const app = express();
const ejslayouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.use(ejslayouts);

app.get('/', function(req, res){
    res.render('index');
});

app.get("/contact", function(req, res){
var contact = {
    name: "Anthony Riojas",
    email: "riojas19@yahoo.com",
    phone: "425-802-4048",
    fax: "who uses fax anymore",
    site: "http://whatwhat.io"
};
    res.render('contact', {contact});
});


app.get('/skills', function(req, res){
var skills = [
    "JavaScript",
    "HTML 5",
    "CSS 3",
    "Node JS",
    "Express JS",
    "Crooning"
];
res.render('skills', {skills});
});


app.listen(3000, function() {
    console.log("listening on port 3000...");
});






