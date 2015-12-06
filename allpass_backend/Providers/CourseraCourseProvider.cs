using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using allpassaggr.DataModel;

namespace allpassaggr.Providers
{
    public class CourseraCourseProvider: ICourseProvider
    {
        public CourseraCourseProvider()
        {
            this.ID = "1";
        }

        public string ID { get; set; }

        public IEnumerable<CourseModel> GetAllCourses()
        {
            var courses = new List<CourseModel>();
            for(int i = 0; i <10; i++)
            {
                courses.Add(new CourseModel()
                {
                    Title = i.ToString(),
                    Id = i.ToString()
                });
            }
            return courses;
        }
    }
}