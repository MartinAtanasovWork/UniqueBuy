const { Furniture } = require("../model/Furniture");

async function getAllFurniture() {
    let data = await Furniture.find();

    return data;
}

async function getOneFurniture(id) {
    let data = await Furniture.findOne({_id:id});
    
    return data;
}

async function createFurniture(furnitureInfo,artisanId) {
    furnitureInfo.artisan_id = artisanId; 

    let data = new Furniture(furnitureInfo) ;

    await data.save();

    return data;
}

async function updateFurniture(id,furnitureInfo) {
    let data = await Furniture.findOneAndUpdate({_id:id},furnitureInfo);

    return data;
}

async function deleteFurniture(id) {
    await Furniture.findOneAndDelete({_id:id});    
}

module.exports = {
    getAllFurniture,
    getOneFurniture,
    createFurniture,
    updateFurniture,
    deleteFurniture
}