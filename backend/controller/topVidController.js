const TopVid = require('..//models/topVidModels');
const mongoose = require("mongoose");

const createTopVid = async (req, res) => {
    const {titre, url} = req.body;

    try{

        const existingTopVid = await TopVid.findOne({ titre, url });
        if (existingTopVid) {
            res.status(200).json({ message: "Un document avec ce titre et cette URL existe déjà." });
        }
        else{
            const topVid = await TopVid.create({titre, url});
        res.status(200).json(topVid);
        }
        
    } catch(error){
        res.status(400).json({error: error.message});
    }
}


const getTopVids = async (req, res) => {
    try{
        const topVid = await TopVid.find({}).sort({createdAt: -1});
        res.status(200).json(topVid);
    } catch(error){
        res.status(400).json({error: error.message});
    }
}


module.exports = {
    createTopVid,
    getTopVids,
}


