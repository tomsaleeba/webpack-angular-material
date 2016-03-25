/**
 * [HomeConfig description]
 * @param {service} $stateProvider [description]
 */
/*@ngInject*/
function HomeConfig($stateProvider, $urlRouterProvider){
	$stateProvider.state("test", {
        url: '/test',
        views : {
            '' : {
                templateUrl: 'components/home/home.html',
        		controller: 'HomeController',
        		controllerAs: 'vm'
            }
        }
    });

    $stateProvider.state("home", {
        url: '/home',
        views : {
            '' : {
                templateUrl: 'components/home/home-mat.html',
        		controller: 'AppController',
        		controllerAs: 'vm'
            }
        }
    });

    $urlRouterProvider.otherwise('/home');
}
export {HomeConfig};