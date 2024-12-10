const { Clothes } = require("../model/Clothes");

async function getAllClothes() {
    let data = await Clothes.find();

    return data;
}

async function getOneClothes(id) {
    let data = await Clothes.findOne({_id:id});
    
    return data;
}

async function createClothes(ClothesInfo) {
    let data = new Clothes(ClothesInfo) ;

    await data.save();

    return data;
}

async function updateClothes(id,ClothesInfo) {
    let data = await Clothes.findOneAndUpdate({_id:id},ClothesInfo);

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