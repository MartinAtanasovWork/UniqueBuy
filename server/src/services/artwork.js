const { Artwork } = require("../model/Artwork");

async function getAllArtwork() {
    let data = await Artwork.find();

    return data;
}

async function getOneArtwork(id) {
    let data = await Artwork.findOne({_id:id});
    
    return data;
}

async function createArtwork(artworkInfo,artisanId) {
    artworkInfo.artisan_id = artisanId;    
    
    let data = new Artwork(artworkInfo) ;

    await data.save();

    return data;
}

async function updateArtwork(id,artworkInfo) {
    let data = await Artwork.findOneAndUpdate({_id:id},artworkInfo);

    return data;
}

async function deleteArtwork(id) {
    await Artwork.findOneAndDelete({_id:id});    
}

module.exports = {
    getAllArtwork,
    getOneArtwork,
    createArtwork,
    updateArtwork,
    deleteArtwork
}