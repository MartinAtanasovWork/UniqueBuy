const { Jewelry } = require("../model/Jewelry");

async function getAllJewelry() {
    let data = await Jewelry.find();

    return data;
}

async function getOneJewelry(id) {
    let data = await Jewelry.findOne({_id:id});
    
    return data;
}

async function createJewelry(jewelryInfo,artisanId) {
    jewelryInfo.artisan_id = artisanId;

    let data = new Jewelry(jewelryInfo) ;

    await data.save();

    return data;
}

async function updateJewelry(id,jewelryInfo) {
    let data = await Jewelry.findOneAndUpdate({_id:id},jewelryInfo);

    return data;
}

async function deleteJewelry(id) {
    await Jewelry.findOneAndDelete({_id:id});    
}

module.exports = {
    getAllJewelry,
    getOneJewelry,
    createJewelry,
    updateJewelry,
    deleteJewelry
}