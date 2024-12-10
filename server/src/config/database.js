const mongoose = require("mongoose");
require("../model/Artisan");
require("../model/Jewelry");
require("../model/Pottery");
require("../model/Artwork");
require("../model/Clothes");
require("../model/Furniture");

async function databaseConfig() {
    const connectionString = "mongodb://127.0.0.1:27017/UniqueBuy";  

    await mongoose.connect(connectionString,{});   
}

module.exports = {
    databaseConfig
}