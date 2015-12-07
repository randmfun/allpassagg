'use strict';

allPassApp.controller('CourseDetailController',
        function CourseDetailController($scope, $routeParams, courseDataService, $log) {
            $log.warn($routeParams.CourseID);
            $scope.course = courseDataService.getCourseDetails($routeParams.CourseID);
        }
);
