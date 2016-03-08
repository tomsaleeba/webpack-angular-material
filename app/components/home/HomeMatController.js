
export class AppController {

	constructor($scope, $timeout, $mdSidenav, $mdMedia, $log){
    this.$mdMedia = $mdMedia;
    this.$scope = $scope;
		this.$timeout = $timeout;
		this.$mdSidenav = $mdSidenav;
		this.$log = $log;
    this.toggleLeft = this.buildDelayedToggler('left');
	}
  

  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = this.$scope,
          args = Array.prototype.slice.call(arguments);
      this.$timeout.cancel(timer);
      timer = this.$timeout(function() {
        	timer = undefined;
        	func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  buildDelayedToggler(navID) {
    let vm = this;
    return this.debounce(function() {
      vm.$mdSidenav(navID).toggle().then(function () {
          vm.$log.debug("toggle " + navID + " is done");
      });
    }, 200);
  }

  buildToggler(navID) {
    let vm = this;
    return function() {
      vm.$mdSidenav(navID).toggle().then(function () {
          vm.$log.debug("toggle " + navID + " is done");
      });
    };
  }

}

export class LeftController{

	constructor($mdSidenav, $log) {
		this.$mdSidenav = $mdSidenav;
		this.$log = $log;
	}
	
	close() {
    let vm = this;
  	this.$mdSidenav('left').close().then(function () {
      	vm.$log.debug("close LEFT is done");
    });
	}
}
