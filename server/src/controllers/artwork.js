const { getAllArtwork, getOneArtwork, createArtwork, updateArtwork, deleteArtwork } = require("../services/artwork");

async function getAllArtworkController(req,res){
    let result = await getAllArtwork();
    
    res.json(result);
    res.end();
}

async function getOneArtworkContoller(req,res) {
    let id = req.params.id;
      
    let result = await getOneArtwork(id);
     
    res.json(result);
    res.end();
}

async function createArtworkContoller(req,res) {
    let artisan_id = req.user._id;
    let data = req.body;

    let result = await createArtwork(data,artisan_id);
    
    res.json(result);
    res.end();
}

async function updateArtworkController(req,res) {
    let id = req.params.id;
    let data = req.body;

    let Artwork = await getOneArtwork(id);

    let artisan_id = Artwork?.artisan_id || "";
    let user_id = req?.user._id || "a";
       
    if(artisan_id != user_id){          
        res.status(403);
        res.end();
        return;
    }
      
    let result = await updateArtwork(id,data);

    res.json(result);
    res.end();
}

async function deleteArtworkController(req,res) {
    let id = req.params.id;
    
    let data = await getOneArtwork(id);

    let artisan_id = data?.artisan_id || "";
    let user_id = req?.user._id || "a";        

    if(artisan_id != user_id){                
        res.status(403);
        res.end();
        return;
    }

    await deleteArtwork(id);

    res.status(204);
    res.end();
}

module.exports = {
    getAllArtworkController,
    getOneArtworkContoller,
    createArtworkContoller,
    updateArtworkController,
    deleteArtworkController
}