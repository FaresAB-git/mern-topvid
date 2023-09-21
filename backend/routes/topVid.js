var express = require('express');
const {createTopVid, getTopVids} = require('..//controller/topVidController');
const router = express.Router();


router.get("/", getTopVids)

router.get("/:id", ()=>{

})

router.post("/", createTopVid)


router.patch("/:id", ()=>{

})

router.delete("/:id", ()=>{

})

module.exports = router;