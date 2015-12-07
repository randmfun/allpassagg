'use strict';

var allPassApp = angular.module('allpassApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/courses',
        {
            templateUrl: 'templates/courselist.html',
            controller: 'CourseListController',
            title: 'Discover New Courses'
        });

        $routeProvider.when('/courses/:CourseID',
        {
            templateUrl: 'templates/coursedetails.html',
            controller: 'CourseDetailController',
            title: 'Course Detail'
        });
                
        $routeProvider.when('/about',
        {
            templateUrl: 'templates/about.html',
            controller: 'EditProfileController',
            title: 'Contacts'
        });

        $routeProvider.otherwise('/courses');
});

//  Force AngularJS to call our JSON Web Service with a 'GET' rather than an 'OPTION'
//  Taken from: http://better-inter.net/enabling-cors-in-angular-js/
//allPassApp.config(['$httpProvider', function ($httpProvider) {
//    $httpProvider.defaults.useXDomain = true;
//    //$httpProvider.defaults.withCredentials = true;
//    delete $httpProvider.defaults.headers.common['X-Requested-With'];
//}]);


