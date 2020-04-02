const express = require("express");
const router = express.Router();

// Controllers
const athele = require("./db_controllers/athlete");
const participant = require("./db_controllers/participant");
const sport = require("./db_controllers/sport");
const country = require("./db_controllers/country");

// Routes
router.post("/athlete/newAthlete", athele.newAthlete);
// router.put("/athelete/update", athelte.updateAthlete);
// router.delete("/athelte/delete", athele.deleteAthlete);
// router.get("/athlete/:id", athele.getInfo);
router.get("/athlete/", athele.allAthletes);
router.get("/athlete/numAthleteAgeCountry", athele.numAthleteAgeCountry);

router.get("/participant/getCountries", participant.nationalities);
router.get("/participant/hatachiSport", participant.hatachiSport);

router.post("/sport/newSport", sport.newSport);

router.get("/country/oneGoldMin", country.atLeastOneGold);
router.get("/country/mostGoldMedals", country.mostGoldMedals);
router.get("/country/participateAllSports", country.participateAllSports);

module.exports = router;