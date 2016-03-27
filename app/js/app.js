var app = angular.module("myPage" , ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})
	// .when('/home', {
	// 	templateUrl: 'pages/home.html',
	// 	controller: 'homeCtrl'
	// })
	// .when('/mblog', {
	// 	templateUrl: 'pages/blog.html',
	// 	controller: 'blogCtrl'
	// })
	.otherwise({
		redirectTo: '/'
	});

});