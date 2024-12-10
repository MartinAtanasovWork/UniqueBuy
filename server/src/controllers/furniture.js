const { getAllFurniture, getOneFurniture, createFurniture, updateFurniture, deleteFurniture } = require("../services/furniture");

async function getAllFurnitureController(req,res){
    let result = await getAllFurniture();
    
    res.json(result);
    res.end();
}

async function getOneFurnitureContoller(req,res) {
    let id = req.params.id;

    let result = await getOneFurniture(id);
    
    res.json(result);
    res.end();
}

async function createFurnitureContoller(req,res) {
    let data = req.body;

    let result = await createFurniture(data);
    
    res.json(result);
    res.end();
}

async function updateFurnitureController(req,res) {
    let id = req.params.id;
    let data = req.body;

    let Furniture = await getOneFurniture(id);

    let artisan_id = Furniture?.artisan_id || "";
    let user_id = req?.user._id || "a";
       
    if(artisan_id != user_id){          
        res.status(403);
        res.end();
        return;
    }
      
    let result = await updateFurniture(id,data);

    res.json(result);
    res.end();
}

async function deleteFurnitureController(req,res) {
    let id = req.params.id;
    
    let data = await getOneFurniture(id);

    let artisan_id = data?.artisan_id || "";
    let user_id = req?.user_id || "a";

    if(artisan_id != user_id){
        res.status(403);
        res.end();
        return;
    }

    await deleteFurniture(id);

    res.status(204);
    res.end();
}

module.exports = {
    getAllFurnitureController,
    getOneFurnitureContoller,
    createFurnitureContoller,
    updateFurnitureController,
    deleteFurnitureController
}