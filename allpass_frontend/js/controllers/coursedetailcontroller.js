'use strict';

allPassApp.controller('CourseDetailController',
    function CourseDetailController($scope, courseDataService, $log, $stateParams) {
        $scope.course = courseDataService.getCourseDetails($stateParams.CourseID);
    }
);
