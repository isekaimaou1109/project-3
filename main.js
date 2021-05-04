/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const SQL_DATABASE_IP = '192.168.1.10';

const express = require('express');
const http = require('http');
const crypto = require('crypto');
const cluster = require('cluster');

const numCPUs = require('os').cpus().length;
const app = express();


const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

// const config = {
//   server: SQL_DATABASE_IP,
//   authentication: {
//       type: 'default',
//       options: {
//           userName: 'sa', // update me
//           password: 'your_password' // update me
//       }
//   },
//   options: {
//       database: 'SampleDB'
//   }
// }

app.set('engine', 'pug');
app.set('views', './views');

app.use("/public", express.static(`${__dirname}/public`));
app.use("/assets", express.static(`${__dirname}/assets`));


if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.fork().on('listening', (address) => {
    
    // address = { addressType: 4, address: '192.168.1.2', port: 10000, fd: undefined }
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });


} else {
  app.use(async function(req, res, next) {
    next();
  });
  
  app.get('/login', function(req, res) {
    
  
    res.render('login.pug', {
      "title": "Isekai Login"
    });
  });
  
  http.createServer(app).listen(10000, '192.168.1.2', () => console.log('Listening'));
}

