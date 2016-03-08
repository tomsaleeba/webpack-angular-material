module.exports = function (components){

	// default params
	function printMessage (status='working') {  
		// let
	  	let message = 'ES6';                    
		// template string           
	  	console.log(`${message} is ${status}`);    
	}
	printMessage(); 

	return angular.module('app', components.vendor.concat(components.app) );
};