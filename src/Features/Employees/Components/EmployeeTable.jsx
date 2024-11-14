import React from "react";

function EmployeeTable() {
  const data = [
    {
      id: 1,
      firstName: "John",
      middleName: "Doe",
      lastName: "Doe",
      jobTitle: "Software Developer",
      department: "IT",
    },
    {
      id: 2,
      firstName: "Jane",
      middleName: "Doe",
      lastName: "Doe",
      jobTitle: "Software Developer",
      department: "IT",
    },
  ];

  const header = [
    "Employee ID",
    "First Name",
    "Middle Name",
    "Last Name",
    "Job Title",
    "Departments",
    "Action",
  ];

  return (
    <div className="bg-white mt-4 rounded-lg overflow-hidden">
      {/* Table layout for larger screens */}
      <table className="hidden md:table min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
            {header.map((data, index) => (
              <th key={index} className="px-6 py-4 border-b border-gray-200">
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 text-gray-700`}
            >
              {Object.values(employee).map((value, index) => (
                <td
                  key={index}
                  className="px-6 py-4 border-b-2 border-gray-200 text-center"
                >
                  {value}
                </td>
              ))}
              <td className="px-6 py-4 border-b-2 border-gray-200 text-blue-500 cursor-pointer">
                View More
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Card layout for smaller screens */}
      <div className="md:hidden">
        {data.map((employee, index) => (
          <div
            key={index}
            className="border-b border-gray-200 p-4 flex flex-col bg-white rounded-lg shadow-md "
          >
            {Object.values(employee).map((value, index) => (
              <div key={index} className="flex justify-between py-2">
                <span className="font-semibold text-gray-600">
                  {header[index]}:
                </span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
            <div className="flex justify-between py-2">
              <span className="font-semibold text-gray-600">Action:</span>
              <span className="text-blue-500 cursor-pointer">View More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeTable;
