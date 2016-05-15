var request = require('request-promise')


//STAND IN: grab moisture data from GPIO sesnor
	//code code code. See Blink.js example.


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
