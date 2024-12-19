const { Artisan } = require("../model/Artisan");
const bcrypt = require("bcrypt");
const { createToken } = require("./token");
const { getOneJewelry } = require("./jewelry");
const { getOneArtwork } = require("./artwork");
const { getOneClothes } = require("./clothes");
const { getOnePottery } = require("./pottery");
const { getOneFurniture } = require("./furniture");

async function register(artisanInformation) {
    let { email } = artisanInformation;

    let artisan = await Artisan.findOne({ email });

    if (artisan) {
        return { error: "This email is already in use" };
    }

    let password = artisanInformation.password;

    artisanInformation.password = await bcrypt.hash(password, 10);

    let newArtisan = new Artisan(artisanInformation);

    await newArtisan.save();

    let token = createToken(newArtisan);

    let data = {
        artisan: newArtisan,
        "Auth-Token": token
    }

    return data;
}

async function login(email, password) {
    let artisan = await Artisan.findOne({ email });

    if (!artisan) {
        return { error: "User doesn't exist!" };
    }

    if (!(await bcrypt.compare(password, artisan.password))) {
        return { error: "Incorrect password!" };
    }

    let token = createToken(artisan);

    let data = {
        artisan,
        "Auth-Token": token
    }

    return data;
}

async function getUser(id) {
    let artisan = await Artisan.findOne({ _id: id });

    return artisan;
}

async function addToShoppingCart(userId, item) {
    let artisan = await Artisan.findOne({ _id: userId });

    let newcart = [...artisan.cart, item];

    await Artisan.findOneAndUpdate({ _id: userId }, { cart: newcart });
}

async function getShoppingCartItems(userId) {
    let artisan = await Artisan.findOne({ _id: userId });
    let newItems = [];

    artisan.cart.forEach(element => {
        let type = element[0];
        let id = element[1];

        switch (type) {
            case "jewelry":
                let j = getOneJewelry(id);
                newItems.push(j);
                break;
            case "artwork":
                let a = getOneArtwork(id);
                newItems.push(a);
                break;
            case "clothes":
                let c = getOneClothes(id);
                newItems.push(c);
                break;
            case "pottery":
                let p = getOnePottery(id);
                newItems.push(p);
                break;
            case "furniture":
                let f = getOneFurniture(id);
                newItems.push(f);
                break;
        }
    });

    let data = await Promise.all(newItems);

    return data;
}

async function removeFromShoppingCart(userId,id) {
    let user = await Artisan.findOne({_id:userId});

    let newCart = user.cart.filter(item => item[1] != id);   
    
    await Artisan.findOneAndUpdate({_id:userId},{cart:newCart});
}

module.exports = {
    register,
    login,
    getUser,
    addToShoppingCart,
    getShoppingCartItems,
    removeFromShoppingCart
}