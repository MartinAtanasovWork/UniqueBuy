const { Pottery } = require("../model/Pottery");

async function getAllPottery() {
    let data = await Pottery.find();

    return data;
}

async function getOnePottery(id) {
    let data = await Pottery.findOne({_id:id});
    
    return data;
}

async function createPottery(potteryInfo,artisanId) {
    potteryInfo.artisan_id = artisanId;

    let data = new Pottery(potteryInfo) ;

    await data.save();

    return data;
}

async function updatePottery(id,potteryInfo) {
    let data = await Pottery.findOneAndUpdate({_id:id},potteryInfo);

    return data;
}

async function deletePottery(id) {
    await Pottery.findOneAndDelete({_id:id});    
}

module.exports = {
    getAllPottery,
    getOnePottery,
    createPottery,
    updatePottery,
    deletePottery
}