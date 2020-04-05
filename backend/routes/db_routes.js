const express = require("express");
const router = express.Router();

// Controllers
const athlete = require("./db_controllers/athlete");
const participant = require("./db_controllers/participant");
const sport = require("./db_controllers/sport");
const country = require("./db_controllers/country");

// Routes
router.post("/athlete/newAthlete", athlete.newAthlete);
router.put("/athlete/update", athlete.updateAthlete);
router.delete("/athlete/delete/:id", athlete.deleteAthlete);
router.get("/athlete/numAthleteAgeCountry", athlete.numAthleteAgeCountry);
router.get("/athlete/", athlete.allAthletes);
router.get("/athlete/:id", athlete.getInfo);

router.get("/participant/getCountries", participant.nationalities);
router.get(
  "/participant/ageBetweenSport/:minage/:maxage",
  participant.ageBetweenSport
);
router.get("/participant/", participant.allParticipants);
router.get("/participant/:id", participant.getInfo);
router.delete("/participant/delete/:id", participant.deleteParticipant);

router.post("/sport/newSport", sport.newSport);
router.get("/sport", sport.allSports);
router.delete("/sport/delete/:id", sport.deleteSport);
router.put("/sport/update", sport.updateSport);
router.get("/sport/:id", sport.getInfo);

router.get("/country/oneGoldMin", country.atLeastOneGold);
router.get("/country/mostGoldMedals", country.mostGoldMedals);
router.get("/country/mostSilverMedals", country.mostSilverMedals);
router.get("/country/mostBronzeMedals", country.mostBronzeMedals);
router.get("/country/participateAllSports", country.participateAllSports);
router.get("/country", country.allCountries);
router.delete("/country/delete/:name", country.deleteCountry);
router.get("/country/:name", country.getInfo);

module.exports = router;
