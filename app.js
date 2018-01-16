const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

// app.use("/special/*", function (req, res, next) {
//   console.log("you reached the special area");
//   res.send('status');
// })

// app.use(function (req, res, next) {
//   console.log(req.method, req.url, res.statusCode);
//   next();
// })

// app.get("/", (req, res) => res.send("Hello World!"));
// app.get("/news", (req, res) => res.send("News Site"));

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {
	noCache: true ,
    autoescape: true,
    express: app
});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.get('/', function(req, res) {
  res.render('index.html', locals, function(err, output) {
    res.send(output);
  });
});
// to post in server: curl -X POST localhost:3000/modernism
// app.post("/", (req, res) => res.send("modernism"));

app.listen(3000, () => console.log("Example app listening on port 3000"));