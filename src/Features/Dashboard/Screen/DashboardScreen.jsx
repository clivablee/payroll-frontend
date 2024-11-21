import React, { useEffect, useState } from "react";
import LayoutBody from "../../../Components/LayoutBody";
import { FaHome } from "react-icons/fa";
import HomeBirthdayCelebrant from "../Components/DashboardBirthdayCelebrant";
import HomeAnniversary from "../Components/DashboardAnniversary";
import HomePayrollSummary from "../Components/DashboardPayrollSummary";
import HomeAttendanceSummary from "../Components/DashboardAttendanceSummary";
import useDashboardStore from "../Store/DashboardStore";
import useProfileStore from "../../Profile/Store/ProfileStore";

const DashboardScreen = () => {
  const fetchCelebrants = useDashboardStore.getState().fetchCelebrants;
  const fetchAnniversaries = useDashboardStore.getState().fetchAnniversaries;
  const fetchProfile = useProfileStore.getState().fetchProfile;

  useEffect(() => {
    fetchCelebrants();
    fetchAnniversaries();
    fetchProfile();
  }, []);

  return (
    <>
      <div className="relative ">
        <LayoutBody
          children={
            <>
              <div className="flex items-center">
                <FaHome className="text-2xl mr-2" />
                <h1 className="text-2xl">Home</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <HomeBirthdayCelebrant />
                <HomePayrollSummary />
                <HomeAnniversary />
                <HomeAttendanceSummary />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default DashboardScreen;
