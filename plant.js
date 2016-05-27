var request = require('request-promise');
var five = require('johnny-five');
var Raspi = require("raspi-io");

var board = new five.Board({
  io: new Raspi()
});


//TODO: grab moisture data from GPIO sesnor

//THOUGHTS
	// use Johnny Five library's "Sensor" class
	// declare a var, mostRecentReading
	// update mostRecentReading from sensor on a "data" event
	// periodically throw the reading from mostRecentReading out to the server via http


exports.sendPlantInfo = function(plantInfo){
//Sent plant info via HTTP POST to central server	
	var reqObject = {
		method: 'POST',
		uri: 'https://safe-headland-15906.herokuapp.com/',
		body: {},
		json: true
	};
	
	reqObject.data.plantInfo = plantInfo;
	
	request(reqObject)
	.then(function(resp){
		console.log('WE GOT DIS (success): ', resp);
	})
	.catch(function(err){
		console.error('WE GOT DAT (error): ', err);
	})
};

//test exports.sendPlantInfo
var dummyData = {
	'TJ' : 'BOY',
	'Natalie' : 'GIRL',
	'Bob' : 'PLANT'
};

exports.sendPlantInfo(dummyData);
