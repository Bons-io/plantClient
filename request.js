var rp = require('request-promise');

exports.sendPlantInfo = function(plantInfo){
//Sent plant info via HTTP POST to central server	
	var reqObject = {
		method: 'POST',
		uri: 'https://safe-headland-15906.herokuapp.com/',
		body: {},
		json: true
	};
	
	reqObject.data.plantInfo = plantInfo;
	
	rp(reqObject)
	.then(function(resp){
		console.log('Plant data sent successfully : ', resp);
	})
	.catch(function(err){
		console.error('OH BUTTS ITS BROKE! Here is the error: ', err);
	})
};