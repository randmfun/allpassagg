'use strict';

allPassApp.controller('CourseDetailController',
    function CourseDetailController($scope, $routeParams, courseDataService, $log) {
        $scope.course = courseDataService.getCourseDetails($routeParams.CourseID);
    }
);
