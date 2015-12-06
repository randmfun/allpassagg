using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using allpassaggr.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace backend_unittest
{
    [TestClass]
    public class TestCourseController
    {
        [TestMethod]
        public void TestGetAllCourses()
        {
            var courseController = new CourseController();

            var allcourses = courseController.Get();

            Assert.AreEqual(allcourses.Count(), 10);
        }

        [TestMethod]
        public void TestGetCourse()
        {
            const string expectedId = "1";

            var courseController = new CourseController();

            var course = courseController.Get(expectedId);

            Assert.AreEqual(course.Id, expectedId);
        }
    }
}
