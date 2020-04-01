const express = require("express");
const router = express.Router();

// Controllers
// const event = require("./db_controllers/event");
const athele =  require("./db_controllers/athlete");

// Routes
router.post("/athelete/newAthlete", athele.newAthlete);
// router.put("/athelete/update", athelte.updateAthlete);
// router.delete("/athelte/delete", athele.deleteAthlete);
// router.get("/athlete/:id", athele.getInfo);
router.get("/athelete/", athele.allAthletes);

module.exports = router;