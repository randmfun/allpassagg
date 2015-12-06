using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using allpassaggr.DataModel;

namespace allpassaggr.Providers
{
    public class CourseManager
    {
        public IEnumerable<ICourseProvider> GetAllProviders()
        {
            return new List<ICourseProvider>() { new CourseraCourseProvider()};
        }

        public IEnumerable<CourseModel> GetAllCourses()
        {
            var courses = new List<CourseModel>();

            var providers = this.GetAllProviders();

            foreach (var provider in providers)
            {
                courses.AddRange(provider.GetAllCourses());
            }

            return courses;
        }

        public CourseModel GetCourse(string courseId)
        {
            var courses = this.GetAllCourses();

            return (from course in courses
                   where course.Id == courseId
                   select course).First();
        }
        
    }
}