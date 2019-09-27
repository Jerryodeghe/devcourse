const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/scripts'));
// app.use('/scripts', express.static(path.join(__dirname, 'script')))

// API calls
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// 404 Not Found Error
app.use(function (req, res, next) {
  res.status(404).send("404: Page not found!")
})

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).send("Server Error. Sorry the resource is not available right now. Try again later");
});

app.listen(port, () => console.log(`Listening on port ${port}`));