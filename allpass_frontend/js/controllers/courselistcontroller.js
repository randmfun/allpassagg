'use strict';

allPassApp.controller('CourseListController',
        function CourseListController($scope, courseDataService, $log) {

            $scope.searchtext = "";

            $scope.sortorder = 'Title';

            $scope.courses = courseDataService.getAllCourses();

            $scope.ratingpercentage = function (rating) {
                var per = (rating / 5) * 100
                return per.toString() + "%";
            };

            $scope.doSearch = function () {
                $log.warn($scope.searchtext);
                $scope.courses = courseDataService.getCourses($scope.searchtext);
            };

        }
);
