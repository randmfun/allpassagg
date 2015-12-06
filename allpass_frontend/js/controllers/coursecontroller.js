'use strict';

allPassApp.controller('CoursesController',
        function CoursesController($scope, courseDataService, $log) {

            $scope.sortorder = 'Title';

            courseDataService.getAllCourses(function (data) {
                $scope.courses = data;
            });
                        
            $scope.ratingpercentage = function (rating) {
                var per = (rating/5) * 100
                return per.toString() + "%";
            };
        }
);