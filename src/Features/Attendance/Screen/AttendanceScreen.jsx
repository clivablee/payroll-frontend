import React from "react";
import LayoutBody from "../../../Components/LayoutBody";
import PrimaryButton from "../../../Components/PrimaryButton";
import AttendanceTable from "../Components/AttendanceTable";

function AttendanceScreen() {
  return (
    <LayoutBody
      children={
        <div>
          <h1 className="text-3xl font-bold">Attendance</h1>
          <div>Monitor Employees' attendance</div>

          <div className="mt-4 px-4 py-2 border-b   bg-white">
            <div className="flex flex-wrap justify-between items-center">
              <h1>Employee Attendance History</h1>
              <PrimaryButton label={"Create Attendance"} />
            </div>
            <AttendanceTable />
          </div>
        </div>
      }
    />
  );
}

export default AttendanceScreen;
