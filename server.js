const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let comments1 = [];
let comments2 = [];
let comments3 = [];
let id = 0;

app.get('/api/comments1', (req, res) => {
  res.send(comments1);
});

app.get('/api/comments2', (req, res) => {
  res.send(comments2);
});

app.get('/api/comments3', (req, res) => {
  res.send(comments3);
});

app.post('/api/comments1', (req, res) => {
  id = id + 1;
  let item = {id:id, addedComment: req.body.addedComment, author: req.body.author, date: req.body.date, score: req.body.score};
  comments1.push(item);
  res.send(item);
});

app.post('/api/comments2', (req, res) => {
  id = id + 1;
  let item = {id:id, addedComment: req.body.addedComment, author: req.body.author, date: req.body.date, score: req.body.score};
  comments2.push(item);
  res.send(item);
});

app.post('/api/comments3', (req, res) => {
  id = id + 1;
  let item = {id:id, addedComment: req.body.addedComment, author: req.body.author, date: req.body.date, score: req.body.score};
  comments3.push(item);
  res.send(item);
});

app.put('/api/comments1/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = comments1.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = comments1[index];
  item.score++;
  res.send(item);
});

app.put('/api/comments2/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = comments2.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = comments2[index];
  item.score++;
  res.send(item);
});

app.put('/api/comments3/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let itemsMap = comments3.map(item => { return item.id; });
  let index = itemsMap.indexOf(id);
  let item = comments3[index];
  item.score++;
  res.send(item);
});

app.delete('/api/comments1/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = comments1.map(item => { return item.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that item doesn't exist");
    return;
  }
  comments1.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.delete('/api/comments2/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = comments2.map(item => { return item.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that item doesn't exist");
    return;
  }
  comments2.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.delete('/api/comments3/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = comments3.map(item => { return item.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that item doesn't exist");
    return;
  }
  comments3.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))