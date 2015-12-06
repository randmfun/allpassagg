using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace allpassaggr.DataModel
{
    public class CourseModel
    {
        public string Duration { get; set; }

        public string TutorName { get; set; }

        public bool IsFree { get; set; }

        public bool Cost { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Href { get; set; }

        public string Id { get; set; }

        public string ProviderId { get; set; }
    }
}