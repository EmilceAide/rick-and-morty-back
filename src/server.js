// const http = require('http');
// const getCharById = require('../controllers/getCharById.js');
// const getCharDetail = require('../controllers/getCharDetail.js')


// http.createServer((req, res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*')

//     let id = req.url.split('/').at(-1);

//     if(req.url.includes('onsearch')){
//         getCharById(res, id)
//     }
   
//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }

   

// }).listen(3001, 'localhost')

require("dotenv").config();
const express = require("express");
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors')

const PORT = process.env.PORT || 3001; 

const server = express(); 
server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

server.use('/', router)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})