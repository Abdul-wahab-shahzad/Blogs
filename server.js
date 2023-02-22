const express = require("express");
const mongoose = require("mongoose")
const Card = require("./models/movie_card.js")
const bodyp = require("body-parser")
mongoose.connect("mongodb://localhost:27017/movie_tracker");
const cors = require("cors")
const app = express();
app.use(cors())
app.use(bodyp.json())

app.get('/', (req, res) => {
    res.json("hello")

})
app.get('/all', async (req, res) => {
    const card = await Card.find();
    res.json(card);

})

app.post('/new_card', (req, res) => {
    const new_car = new Card({
        movie_title: req.body.movie_title,
        total_episode: req.body.total_episode,
        description:req.body.description
    });
    new_car.save();
    console.log(new_car);
    res.json(req.body)
})

app.delete('/del/:id', async (req, res) => {
    const rest = await Card.findByIdAndDelete(req.params.id);
    console.log(rest)
})

app.listen(3001, () => {
    console.log("sever is listening on 3000")
})