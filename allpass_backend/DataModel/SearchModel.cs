using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace allpassaggr.DataModel
{
    public class SearchModel
    {
        public SearchModel()
        {
            this.Tag = "*";
        }

        public string Tag { get; set; }

        public string Text { get; set; }

        public string Type { get; set; }
    }

}