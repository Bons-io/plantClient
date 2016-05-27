var five = require('johnny-five');
var Raspi = require("raspi-io");
var request = require('./request.js');

//NOTE: this all still needs to be tested! I wrote it on vacation without my RasPi handy. - JW

//WALKTHROUGH
	// - uses the Johnny Five library's "Sensor" class to control the moisture sensor.
	// - grabs a new reading from the sensor every second.
	// - sends the latest reading to the server every minute.

var board = new five.Board({
  io: new Raspi()
});

// This gets periodically updated with new sensor readings.
var mostRecentReading;

board.on('ready', function(){
	var moistureSensor = new five.Sensor({
		pin : 'P1-7', //Placeholder value. Re-pin as necessary.
		freq : 1000 //takes a new reading every second.
	})

	// Allows direct command line access to the sensor. Taken from a tutorial - this may not be necessary.
	board.repl.inject({
    	pot: moistureSensor
  	});

	// updates mostRecentReading on each "data" event.
	moistureSensor.on("data", function() {
		mostRecentReading = this.value;
		console.log(this.value);
 	});

	// sends the latest reading to the server every minute.
	setInterval(function(){
		var plantData = {
			id : 1,
			message : 'Just a dummy plant id for now - Ive set it to 1. - JW',
			moisture : mostRecentReading
		};

		request.sendPlantInfo(plantData);
	}, 60000)
})
