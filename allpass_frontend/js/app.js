'use strict';

var allPassApp = angular.module('allpassApp', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {

        $stateProvider
            .state('courses',
        {
            url: '/courses',
            templateUrl: 'templates/courselist.html',
            controller: 'CourseListController',
            title: 'Discover New Courses'
        })

        .state('register',
        {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'CourseListController',
            title: 'Discover New Courses'
        })

        .state('coursesdetail',
        {
            url: '/coursesdetail/:CourseID',
            templateUrl: 'templates/coursedetails.html',
            controller: 'CourseDetailController',
            title: 'Course Detail'
        })

        .state('about',
        {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'EditProfileController',
            title: 'Contacts'
        });

        $urlRouterProvider.otherwise('/');

    });

//  Force AngularJS to call our JSON Web Service with a 'GET' rather than an 'OPTION'
//  Taken from: http://better-inter.net/enabling-cors-in-angular-js/
//allPassApp.config(['$httpProvider', function ($httpProvider) {
//    $httpProvider.defaults.useXDomain = true;
//    //$httpProvider.defaults.withCredentials = true;
//    delete $httpProvider.defaults.headers.common['X-Requested-With'];
//}]);


