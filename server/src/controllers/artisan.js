const { login, register, getUser } = require("../services/artisan");

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

module.exports = {
    loginController,
    registerController,
    logoutController,
    getUserController
}