module.exports = angular.module('app', []);  

class MainController {
    constructor(win=$window) {
        this.win = win;
    }
    add(todo) { 
        // access this.win.localStorage ... 
    }
    remove(todo) { }
    todosOf(filter) { }
}

class GitlabService {
    constructor($http) {
        this.$http = $http;
    }
    getFullName() {
        return this.$http.get('http://jsonplaceholder.typicode.com/posts/1');
    }
}

// default params
function printMessage (status='working') {  
	// let
  	let message = 'ES6';                    
	// template string           
  	console.log(`${message} is ${status}`);    
}
printMessage(); 