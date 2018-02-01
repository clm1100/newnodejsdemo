const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);

app.listen('3000',()=>{
    console.log("running in 3000")
})