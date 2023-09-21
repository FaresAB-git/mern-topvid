var express = require('express');
const mongoose = require('mongoose');
const topVidRoutes = require('./routes/topVid');
const cors = require('cors');
require('dotenv').config();


var app = express();
const PORT = 4000;


const corsOptions = {
    origin: 'https://courageous-moonbeam-7b73c5.netlify.app', // Mettez votre URL frontend Netlify ici
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) =>{
  console.log(req.path, req.method);
  next();
});

app.use('/api/topVid', topVidRoutes);


mongoose.connect("mongodb+srv://fares:fares@cluster0.9n8kthf.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {

        app.listen(process.env.PORT || 4000, () => {
            console.log('listening on port 4000');
        });

    })
    .catch((error) => {
        console.log(error);
    })