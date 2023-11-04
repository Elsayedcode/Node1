const express = require('express')
const app = express()
const port = 3004
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  res.sendFile("./views/Home.html" , {root: __dirname});
})


mongoose.connect('mongodb+srv://divemasry:bzBsViLeKJQfbxiV@cluster0.i6j0m1y.mongodb.net/all-data?retryWrites=true&w=majority')
.then(() => {
  app.listen(port, () => {console.log(`http://localhost:${port}/`)});
})
.catch((error) => {console.error(error)});

