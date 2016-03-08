/**
 * [HomeConfig description]
 * @param {service} $stateProvider [description]
 */
export function HomeConfig($stateProvider, $urlRouterProvider){
	$stateProvider.state("home", {
        url: '/home',
        views : {
            '' : {
                templateUrl: 'components/home/home.html',
        		controller: 'HomeController',
        		controllerAs: 'vm'
            }
        }
    });

    $stateProvider.state("homeMat", {
        url: '/homeMat',
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