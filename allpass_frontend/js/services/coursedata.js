'use strict';

allPassApp.factory('courseDataService', function ($http, $log) {

            return {

                //getAllCourses: function (successCb) {
                //    $http.get('http://localhost:50314/api/course/1').
                //        success(function (data, status, headers, config) {
                //            $log.warn('sucess');
                //            successCb(data);
                //        }).
                //        error(function (data, status, headers, config) {
                //            $log.warn('Error')
                //            $log.warn(data, status, headers(), config);
                //        });
                //},

                // Get it from http service as above
                getAllCourses: function (successCb) {
                    var mockAllCourses = [
                        {
                            OrderID: "1",
                            OrderDate: "10/02/2015",
                            Duration: 2,
                            Title: "Mongo DB Fundamentals",
                            Describtion: "A basic insight into Mongo DB",
                            Cost: "110",
                            Level: "Advanced",
                            Rating: 4.5,
                            Provider: "Pluralsight",
                            ProviderUrl: "http://www.pluralsight.com/",
                            CourseUrl: "http://www.pluralsight.com/",
                            UpVoteCount: 10
                        },
                         {
                             OrderID: "1",
                             OrderDate: "10/02/2015",
                             Duration: 2,
                             Title: "Mongo DB Fundamentals 2",
                             Describtion: "A basic insight into Mongo DB",
                             Cost: "110",
                             Level: "Intermediate",
                             Rating: 2.5,
                             Provider: "Pluralsight",
                             ProviderUrl: "http://www.pluralsight.com/",
                             CourseUrl: "http://www.pluralsight.com/",
                             UpVoteCount: 20
                         },
                         {
                             OrderID: "2",
                             OrderDate: "10/02/2015",
                             Duration: 1,
                             Title: "Angular Fundamentals",
                             Describtion: "A basic insight into Mongo DB",
                             Cost: "110",
                             Level: "Advanced",
                             Provider: "Coursera",
                             Rating: 3.0,
                             ProviderUrl: "https://www.coursera.org",
                             courseUrl: "https://www.coursera.org",
                             UpVoteCount: 30
                         },
                        {
                            OrderID: "2",
                            OrderDate: "10/02/2015",
                            Duration: 1,
                            Title: "Angular Fundamentals 2",
                            Describtion: "A basic insight into Mongo DB",
                            Cost: "110",
                            Level: "Intermediate",
                            Provider: "Coursera",
                            Rating: 1.0,
                            ProviderUrl: "https://www.coursera.org",
                            courseUrl: "https://www.coursera.org",
                            UpVoteCount: 40
                        }
                    ];

                    successCb(mockAllCourses);
                },

                getCourseDetails: function (id) {

                },
            };
        }
);