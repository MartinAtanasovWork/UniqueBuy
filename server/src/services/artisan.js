const { Artisan } = require("../model/Artisan");
const bcrypt = require("bcrypt");
const { createToken } = require("./token");

async function register(artisanInformation) {
    let {email} = artisanInformation;

    let artisan = await Artisan.findOne({ email });

    if (artisan) {
        return { error: "This email is already in use" };
    }       

    let password = artisanInformation.password;

    artisanInformation.password = await bcrypt.hash(password,10);

    let newArtisan = new Artisan(artisanInformation);

    await newArtisan.save();

    let token = createToken(newArtisan);

    let data = {
        artisan: newArtisan,
        "Auth-Token": token
    }

    return data;
}

async function login(email,password) {   
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


module.exports = {
    register,
    login  
}