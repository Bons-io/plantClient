var five = require('johnny-five');
var Raspi = require("raspi-io");
var request = require('./request.js');

var board = new five.Board({
  io: new Raspi()
});

//TODO: grab moisture data from GPIO sesnor

//THOUGHTS
	// use Johnny Five library's "Sensor" class
	// declare a var, mostRecentReading
	// update mostRecentReading from sensor on a "data" event
	// periodically throw the reading from mostRecentReading out to the server via http

//test exports.sendPlantInfo
var dummyData = {
	'TJ' : 'BOY',
	'Natalie' : 'GIRL',
	'Bob' : 'PLANT'
};

request.sendPlantInfo(dummyData);
