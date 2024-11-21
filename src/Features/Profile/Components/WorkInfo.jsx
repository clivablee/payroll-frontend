import React from "react";
import TextField from "../../../Components/TextField";
import useProfileStore from "../Store/ProfileStore";

function WorkInfo() {
  const profile = useProfileStore((state) => state.profile);

  const workData = [
    { label: "Employee ID", value: profile.emp_id },
    { label: "Job Title", value: profile.job_title },
    { label: "Salary", value: profile.salary },
    { label: "Employment Status", value: profile.employment_status },
    { label: "Employee Type", value: profile.employee_type },
    { label: "Employee Level", value: profile.employee_level },
    { label: "Work Email", value: profile.work_email },
    { label: "Assigned Branch", value: profile.assigned_branch },
    { label: "Assigned City", value: profile.assigned_city },
    { label: "Department", value: profile.department },
    { label: "Schedule", value: profile.schedule },
    { label: "Hired Date", value: profile.hired_date },
    { label: "Third Month (3rd)", value: profile.third_month },
    { label: "Fifth Month (3rd)", value: profile.fifth_month },
    { label: "Regularization Date", value: profile.regularization_date },
  ];

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Employment Details</h1>
        <div className="grid grid-cols-3 grid-rows-5 gap-4">
          {workData.map((data, index) => {
            return (
              <TextField label={data.label} value={data.value} key={index} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WorkInfo;
