import React, { useEffect } from 'react'
import LayoutBody from '../../../Components/LayoutBody';
import { FaHome } from "react-icons/fa";
import HomeBirthdayCelebrant from '../Components/DashboardBirthdayCelebrant';
import HomeAnniversary from '../Components/DashboardAnniversary';
import HomePayrollSummary from '../Components/DashboardPayrollSummary';
import HomeAttendanceSummary from '../Components/DashboardAttendanceSummary';
import useDashboardStore from '../Store/DashboardStore';

const DashboardScreen = () => {

    const fetchCelebrants = useDashboardStore.getState().fetchCelebrants;
    const fetchAnniversaries = useDashboardStore.getState().fetchAnniversaries;

    useEffect(() => {
        fetchCelebrants();
        fetchAnniversaries();
    }, []);

  return (
    <div className='relative '>
        <LayoutBody 
            children={
                <>
                    <div className='flex items-center'>
                        <FaHome className='text-2xl mr-2'/>
                        <h1 className='text-2xl'>Home</h1>
                    </div>
                    <div className='flex flex-col md:flex-row md:space-x-4 overflow-auto'>
                        <HomeBirthdayCelebrant />
                        <HomePayrollSummary />
                    </div>
                    <div className='flex flex-col md:flex-row md:space-x-4 overflow-auto'>
                        <HomeAnniversary />
                        <HomeAttendanceSummary />
                    </div>
                </>
            }
        />
         
    </div>
  )
}

export default DashboardScreen;
