/**
 * @type {controller}
 */
export class HomeController {

	constructor($log){
		$log.debug("HomeController");
		this.message = "First ES6 class";
	}

	changeMessage(mess){
		this.message = mess;
	}
}