import React from 'react';
import { 
  Target, 
  BarChart2, 
  FileText, 
  Link, 
  Share2, 
  Users 
} from 'lucide-react';

const WhoWeServeSection = () => {
  const criteria = [
    {
      icon: <Target className="w-8 h-8" />,
      text: "Who have Inconsistent Revenue in your Business"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      text: "Lack of Leads Per month"
    },
    {
      icon: <Link className="w-8 h-8" />,
      text: "Troubles in Complex Funnels and managing ads"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      text: "Wants to get predictable appointments for your business daily"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      text: "Are interested in a long-term partnership"
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Are Confident in their product , Service or solution "
    }
  ];

  return (
    <div className="bg-white my-14 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-purple-600   font-medium mb-4">
            WHO WE'RE FOR
          </h3>
          <h2 className="text-4xl max-sm:text-2xl font-bold text-purple-950 mb-2">
          We only work with 
          </h2>
          <h2 className="text-4xl  max-sm:text-2xl font-bold text-purple-950">
          B2b and B2c Companies
          </h2>
        </div>

        {/* Criteria Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {criteria.map((item, index) => (
            <div key={index} className="flex items-center gap-4 justify-center ">
            <div className="flex-shrink-0 w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-full bg-custom-pink flex items-center justify-center text-white">
                {item.icon}
              </div>
              <div className="flex-grow">
                <p className="text-lg max-sm:text-base text-purple-950 font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeServeSection;