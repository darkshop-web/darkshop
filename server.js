const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// database (مؤقت)
let accounts = [
  {name: "GTA V", price: 20, type: "Full Access"},
  {name: "FIFA 23", price: 15, type: "Shared"},
  {name: "Forza Horizon 5", price: 18, type: "Full Access"},
  {name: "God of War Ragnarok", price: 25, type: "Full Access"},
  {name: "NBA 2K25", price: 22, type: "Shared"},
  {name: "Ghost of Tsushima", price: 20, type: "Full Access"},
  {name: "Mortal Kombat 1", price: 19, type: "Full Access"},
  {name: "Mortal Kombat 11", price: 12, type: "Shared"},
  {name: "Far Cry 5", price: 14, type: "Full Access"},
  {name: "The Last of Us Part II", price: 23, type: "Full Access"}
];

// API
app.get('/accounts', (req, res) => {
  res.json(accounts);
});

app.post('/add', (req, res) => {
  accounts.push(req.body);
  res.send("added");
});

app.post('/delete', (req, res) => {
  accounts.splice(req.body.index, 1);
  res.send("deleted");
});

app.post('/buy', (req, res) => {
  console.log("New Order:", req.body.game);
  res.send("ok");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});