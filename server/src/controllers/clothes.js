const { getAllClothes, getOneClothes, createClothes, updateClothes, deleteClothes } = require("../services/clothes");

async function getAllClothesController(req,res){
    let result = await getAllClothes();
    
    res.json(result);
    res.end();
}

async function getOneClothesContoller(req,res) {
    let id = req.params.id;
    
    let result = await getOneClothes(id);
    
    res.json(result);
    res.end();
}

async function createClothesContoller(req,res) {
    let artisan_id = req.user._id;
    let data = req.body;

    let result = await createClothes(data,artisan_id);
    
    res.json(result);
    res.end();
}

async function updateClothesController(req,res) {
    let id = req.params.id;
    let data = req.body;

    let Clothes = await getOneClothes(id);

    let artisan_id = Clothes?.artisan_id || "";
    let user_id = req?.user._id || "a";
       
    if(artisan_id != user_id){          
        res.status(403);
        res.end();
        return;
    }
      
    let result = await updateClothes(id,data);

    res.json(result);
    res.end();
}

async function deleteClothesController(req,res) {
    let id = req.params.id;
    
    let data = await getOneClothes(id);

    let artisan_id = data?.artisan_id || "";
    let user_id = req?.user_id || "a";

    if(artisan_id != user_id){
        res.status(403);
        res.end();
        return;
    }

    await deleteClothes(id);

    res.status(204);
    res.end();
}

module.exports = {
    getAllClothesController,
    getOneClothesContoller,
    createClothesContoller,
    updateClothesController,
    deleteClothesController
}