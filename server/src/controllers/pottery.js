const { getAllPottery, getOnePottery, createPottery, updatePottery, deletePottery } = require("../services/pottery");

async function getAllPotteryController(req,res){
    let result = await getAllPottery();
    
    res.json(result);
    res.end();
}

async function getOnePotteryContoller(req,res) {
    let id = req.params.id;

    let result = await getOnePottery(id);
    
    res.json(result);
    res.end();
}

async function createPotteryContoller(req,res) {
    let data = req.body;

    let result = await createPottery(data);
    
    res.json(result);
    res.end();
}

async function updatePotteryController(req,res) {
    let id = req.params.id;
    let data = req.body;

    let jewelry = await getOnePottery(id);

    let artisan_id = jewelry?.artisan_id || "";
    let user_id = req?.user._id || "a";
       
    if(artisan_id != user_id){          
        res.status(403);
        res.end();
        return;
    }
      
    let result = await updatePottery(id,data);

    res.json(result);
    res.end();
}

async function deletePotteryController(req,res) {
    let id = req.params.id;
    
    let data = await getOnePottery(id);

    let artisan_id = data?.artisan_id || "";
    let user_id = req?.user_id || "a";

    if(artisan_id != user_id){
        res.status(403);
        res.end();
        return;
    }

    await deletePottery(id);

    res.status(204);
    res.end();
}

module.exports = {
    getAllPotteryController,
    getOnePotteryContoller,
    createPotteryContoller,
    updatePotteryController,
    deletePotteryController
}