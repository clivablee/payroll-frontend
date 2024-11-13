import React from "react";
import LayoutBody from "../../../Components/LayoutBody";
import EmployeeTable from "../Components/EmployeeTable";
import EmployeeFilter from "../Components/EmployeeFilter";

function EmployeeScreen() {
  return (
    <div>
      <LayoutBody
        children={
          <>
            <h1>All Employees</h1>
            <p>View, search and add new employee</p>
            <EmployeeFilter />
            <EmployeeTable />
          </>
        }
      />
    </div>
  );
}

export default EmployeeScreen;
