const { text } = require("express");
const mongoose=require("mongoose");



const card=mongoose.Schema({
    movie_title : String,
    
    total_episode:Number,

    description:String

});



const Card = mongoose.model("card", card);

module.exports = Card;