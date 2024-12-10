const { login, register } = require("../services/artisan");

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

module.exports = {
    loginController,
    registerController,
    logoutController
}