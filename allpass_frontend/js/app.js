'use strict';

var allPassApp = angular.module('allpassApp', [])

//  Force AngularJS to call our JSON Web Service with a 'GET' rather than an 'OPTION'
//  Taken from: http://better-inter.net/enabling-cors-in-angular-js/
allPassApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


//var allPassApp = angular.module('allpassApp', ['ngRoute'])
//.config(function ($routeProvider) {
//    $routeProvider.when('/account',
//        {
//            templateUrl: 'templates/account.html',
//            controller: ''
//        })
//});