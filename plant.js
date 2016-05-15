var request = require('request-promise')


//grab a bunch of stuff from the raspberry pi
	//code code code. Stand in. see Blink.js example.


//take info from the raspberry pi and POST it to the server
var dummyData = {
	'TJ' : 'BOY',
	'Natalie' : 'GIRL',
	'Bob' : 'PLANT'
};

var reqObject = {
	method: 'POST',
	uri: /* Stand in url **/,
	body: dummyData,
	json: true
};


exports.sendPlantInfo = function(plantInfo){
	request(reqObject)
	.then(function(resp){
		console.log('WE GOT DIS: ', resp);
	})
	.catch(function(err){
		console.error('WE GOT DAT (error): ', err);
	})
};

//testing sending info:
exports.sendPlantInfo();