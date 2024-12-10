const { loginController, registerController, logoutController } = require("../controllers/artisan");
const { getAllArtworkController, getOneArtworkContoller, createArtworkContoller, updateArtworkController, deleteArtworkController } = require("../controllers/artwork");
const { getAllClothesController } = require("../controllers/clothes");
const { getAllFurnitureController, getOneFurnitureContoller, createFurnitureContoller, updateFurnitureController, deleteFurnitureController } = require("../controllers/furniture");
const { getAllJewelryController, getOneJewelryContoller, createJewelryContoller, updateJewelryController, deletejewelryController } = require("../controllers/jewelry");
const { getAllPotteryController, getOnePotteryContoller, createPotteryContoller, updatePotteryController, deletePotteryController } = require("../controllers/pottery");
const { isUser } = require("../middlewares/guards");

const router = require("express").Router();

router.post("/artisan/login",loginController);
router.post("/artisan/register",registerController);
router.get("/artisan/logout",isUser,logoutController);

router.get("/jewelry",getAllJewelryController);
router.get("/jewelry/:id",getOneJewelryContoller);
router.post("/jewelry",isUser,createJewelryContoller);
router.put("/jewelry/:id",isUser,updateJewelryController);
router.delete("/jewelry/:id",isUser,deletejewelryController);

router.get("/pottery",getAllPotteryController);
router.get("/pottery/:id",getOnePotteryContoller);
router.post("/pottery",isUser,createPotteryContoller);
router.put("/pottery/:id",isUser,updatePotteryController);
router.delete("/pottery/:id",isUser,deletePotteryController);

router.get("/artwork",getAllArtworkController);
router.get("/artwork/:id",getOneArtworkContoller);
router.post("/artwork",isUser,createArtworkContoller);
router.put("/artwork/:id",isUser,updateArtworkController);
router.delete("/artwork/:id",isUser,deletePotteryController);

router.get("/clothes",getAllClothesController);
router.get("/clothes/:id",getOneArtworkContoller);
router.post("/clothes",isUser,createArtworkContoller);
router.put("/clothes/:id",isUser,updateArtworkController);
router.delete("/clothes/:id",isUser,deleteArtworkController);

router.get("/furniture",getAllFurnitureController);
router.get("/furniture/:id",getOneFurnitureContoller);
router.post("/furniture",isUser,createFurnitureContoller);
router.put("/furniture/:id",isUser,updateFurnitureController);
router.delete("/furniture/:id",isUser,deleteFurnitureController);

module.exports = {
    router
} 