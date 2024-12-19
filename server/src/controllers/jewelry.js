const { getAllJewelry, getOneJewelry, createJewelry, updateJewelry, deleteJewelry } = require("../services/jewelry");

async function getAllJewelryController(req,res){
    let result = await getAllJewelry();
    
    res.json(result);
    res.end();
}

async function getOneJewelryContoller(req,res) {
    let id = req.params.id;

    let result = await getOneJewelry(id);
    
    res.json(result);
    res.end();
}

async function createJewelryContoller(req,res) {
    let artisan_id = req.user._id;
    let data = req.body;

    let result = await createJewelry(data,artisan_id);
    
    res.json(result);
    res.end();
}

async function updateJewelryController(req,res) {
    let id = req.params.id;
    let data = req.body;

    let jewelry = await getOneJewelry(id);

    let artisan_id = jewelry?.artisan_id || "";
    let user_id = req?.user._id || "a";
       
    if(artisan_id != user_id){          
        res.status(403);
        res.end();
        return;
    }
      
    let result = await updateJewelry(id,data);

    res.json(result);
    res.end();
}

async function deletejewelryController(req,res) {
    let id = req.params.id;
    
    let data = await getOneJewelry(id);

    let artisan_id = data?.artisan_id || "";
    let user_id = req?.user._id || "a";

    if(artisan_id != user_id){
        res.status(403);
        res.end();
        return;
    }

    await deleteJewelry(id);

    res.status(204);
    res.end();
}

module.exports = {
    getAllJewelryController,
    getOneJewelryContoller,
    createJewelryContoller,
    updateJewelryController,
    deletejewelryController
}