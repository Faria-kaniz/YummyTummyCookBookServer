const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const chefData = require('./data/chefs.json');

// api no : 1
app.get('/', (req, res)=>{
    res.send('Welcome to Yummy Tummy Cook Book Backend Server');
});

// api no : 2 -> all chef data as list
app.get('/chef-list', (req, res)=>{
    res.send(chefData);
});

// api no : 3 -> single chef data by id
app.get('/chef/:id', (req, res)=>{
    const id = req.params.id;
    const selectedChef = chefData.find(chef => chef.chef_id == id);
    res.send(selectedChef);
});

app.listen(port, ()=>{
    console.log(`Yummy Tummy Cook Book Backend Server is running: ${port}`);
});