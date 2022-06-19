const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController=require("../controllers/weatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getVaccinationSessions",CowinController.getVaccinationSessions)
router.get("/data/2.5/weather",weatherController.getSortedCities)
router.get("/data/2.5/weather",weatherController.getWeatherOfLondon)
router.get('/get_memes'.memeController.get_memes)
router.post('/caption_image'.memeController.caption_image)









// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;