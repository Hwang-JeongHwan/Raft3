const PORT = 8000;
const HOST = '127.0.0.1';
const Random = require('./func')
const dgram = require('dgram');
const mergeJSON = require('merge-json');
const client = dgram.createSocket('udp4');
const fs = require('fs').promises;
const fs1= require('fs');
const { exit } = require('process');

var timer = '{"timer":"deadtime","id":"app","key":"1","value":"1","cnt":"1"}';
var deadtime = Date.now();
setTimeout(function () {
    
    console.log("dead");
    console.log(Date.now() - deadtime);
    var rejointime = Date.now();
    client.send(timer, 9005, HOST, function(err, bytes) {
        
        console.log('deadtime send' + HOST +':'+ PORT);
        console.log(timer);
        
    
      
      });
    setTimeout(function () {
        
        console.log("rejoin");
        console.log(Date.now() - rejointime);
        
        var timer2 = '{"timer":"rejointime","id":"app","key":"2","value":"2","cnt":"2"}';
        client.send(timer2, 9005, HOST, function(err, bytes) {
            
            console.log('rejointime send' + HOST +':'+ PORT);
            console.log(timer2);
            exit();
        
          
          });

        }, 10000);
    }, 10000);