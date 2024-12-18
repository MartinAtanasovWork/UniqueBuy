const { Clothes } = require("../model/Clothes");

async function getAllClothes() {
    let data = await Clothes.find();

    return data;
}

async function getOneClothes(id) {
    let data = await Clothes.findOne({_id:id});
    
    return data;
}

async function createClothes(clothesInfo,artisanId) {
    clothesInfo.artisan_id = artisanId;

    let data = new Clothes(clothesInfo) ;

    await data.save();

    return data;
}

async function updateClothes(id,clothesInfo) {
    let data = await Clothes.findOneAndUpdate({_id:id},clothesInfo);

    return data;
}

async function deleteClothes(id) {
    await Clothes.findOneAndDelete({_id:id});    
}

module.exports = {
    getAllClothes,
    getOneClothes,
    createClothes,
    updateClothes,
    deleteClothes
}