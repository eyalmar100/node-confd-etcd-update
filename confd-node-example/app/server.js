const express = require('express')
const app = express()
const  config=require('eyal');

console.log("start running ..")

// var  valpass=config.get('k4');
console.log("k4    is :"+config.get('k4'));
//
//console.log("Config file: The new config is:\n", config.get('k4'));
//console.log("file     is:"+config.get('password'));
/*
app.get('/', (req, res) => {
  console.log(' -- load again:in the get request : config: require  ---')
   console.log(' -- load again:k4 is '+config.get('k4'))
	//res.json("key ":"example")
    res.send('Hello World!')
//  res.json({ mykey: process.env.FOO })
})
 
*/
 
console.log('waiting for changes ..');
/* 
 app.listen(3000, () => {
        // console.log("password    is :"+config.get('password')); 
	 console.log('Running on port 3000')
})
*/
