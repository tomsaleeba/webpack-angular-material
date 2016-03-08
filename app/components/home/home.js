
import { HomeConfig } from './routes';

import { HomeController } from './HomeController';
import { AppController, LeftController } from './HomeMatController';

angular
	.module('home', [])
	.config(HomeConfig)
	.controller('AppController', AppController)
	.controller('LeftController', LeftController)
	.controller('HomeController', HomeController);
