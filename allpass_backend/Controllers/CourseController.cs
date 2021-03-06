﻿using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using allpassaggr.DataModel;
using allpassaggr.Providers;
using System.Web.Http.Cors;

namespace allpassaggr.Controllers
{
    public class CourseController : ApiController
    {
        // GET: api/Course
        public IEnumerable<CourseModel> Get()
        {
            return new CourseManager().GetAllCourses();
        }

        // GET: api/Course/5
        public CourseModel Get(string id)
        {
            return new CourseManager().GetCourse(id);
        }

        // POST: api/Course
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Course/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Course/5
        public void Delete(int id)
        {
        }
    }
}
