const { login, register, getUser, addToShoppingCart, getShoppingCartItems, removeFromShoppingCart } = require("../services/artisan");

async function registerController(req, res) {
    let result = await register(req.body);

    res.json(result);
    res.end();
}

async function loginController(req, res) {
    let { email, password } = req.body;
    
    let result = await login(email, password);

    res.json(result);
    res.end();
}

async function logoutController(req, res) {
    res.status(200);
    res.end();
}

async function getUserController(req,res) {
    let id = req.user._id;

    let user = await getUser(id);

    res.json(user);
    res.end();
}
async function addToShoppingCartController(req,res) {
    let user_id = req.user._id;
    let item = req.body;
    
    await addToShoppingCart(user_id,item);

    res.status(200);
    res.end();
}
async function getShoppingcartItemsController(req,res) {
    let user_id = req.user._id;

    let items = await getShoppingCartItems(user_id);   
        
    res.json(items);
    res.end();
}
async function removeFromShoppingCartController(req,res) {
    let user_id = req.user._id;
    let id = req.params.id;

    await removeFromShoppingCart(user_id,id);

    res.json(204);
    res.end();
}

module.exports = {
    loginController,
    registerController,
    logoutController,
    getUserController,
    addToShoppingCartController,
    getShoppingcartItemsController,
    removeFromShoppingCartController
}