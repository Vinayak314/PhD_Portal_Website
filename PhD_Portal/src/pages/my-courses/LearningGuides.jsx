import { Link } from "react-router-dom";

const modules = [
  {
    title: "Module 1",
    resources: [
      "Module 1.1 Notes (Download)",
      "Reference Videos for revision (Link)",
      "Module 1.3 Notes (Download)",
      "Module 1.2 Notes (Download)",
      "Reference Videos for Module 1 Revision (Link)",
    ],
  },
  {
    title: "Module 2",
    resources: [
      "Module 2.1 Notes (Download)",
      "Reference Videos for revision (Link)",
      "Module 2.2 Notes (Download)",
    ],
  },
  {
    title: "Module 3",
    resources: [
      "Module 3.1 Notes (Download)",
      "Reference Videos for revision (Link)",
      "Module 3.2 Notes (Download)",
    ],
  },
  {
    title: "Module 4",
    resources: [
      "Module 3.1 Notes (Download)",
      "Reference Videos for revision (Link)",
      "Module 3.2 Notes (Download)",
    ],
  },
];

const LearningGuides = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full p-6 space-y-6">

      <div className="text-[22px] font-bold text-black border-b border-red-600 pb-2 flex flex-row justify-between items-center">
        <h2>
        Operating Systems - Learning Guides
        </h2>
        <Link to="pdf">
        <h3 className="text-[18px]">
          View All
        </h3>
        </Link>
        
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded shadow p-4 flex flex-col space-y-1"
            >
              <h3 className="text-[16px] font-bold text-black mb-2">
                {module.title}
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {module.resources.map((resource, resIndex) => (
                  <li key={resIndex}>{resource}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-[16px] font-bold text-black mb-2">Faculty</h3>
            <p className="text-sm mb-1">Mr. Swapnil Pawar</p>
            <p className="text-sm text-gray-600 mb-3">
              swapnil.pawar@somaiya.edu
            </p>
            <textarea
              placeholder="Write to faculty..."
              className="w-full p-2 rounded border- border-gray-200 text-sm mb-2"
            ></textarea>
            <button className="w-full py-1 cursor-pointer bg-[#B7202E] text-white text-sm rounded">
              Send
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-[16px] font-bold text-black mb-2">
              Announcements
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Operating System OST 1 scheduled for 20/06/2025</li>
              <li>ISE marks released</li>
              <li>All notes uploaded</li>
              <li>Chapters completed for ESE</li>
              <li>ISE papers shared soon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningGuides;
