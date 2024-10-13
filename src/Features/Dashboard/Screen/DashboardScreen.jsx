import React, { useEffect } from 'react'
import LayoutBody from '../../../Components/LayoutBody';
import { FaHome } from "react-icons/fa";
import HomeBirthdayCelebrant from '../Components/HomeBirthdayCelebrant';
import HomeAnniversary from '../Components/HomeAnniversary';
import HomePayrollSummary from '../Components/HomePayrollSummary';
import HomeAttendanceSummary from '../Components/HomeAttendanceSummary';
import useDashboardStore from '../Store/DashboardStore';

const DashboardScreen = () => {

    const fetchCelebrants = useDashboardStore.getState().fetchCelebrants;

    useEffect(() => {
        fetchCelebrants();
    }, []);

  return (
    <div className='relative h-full'>
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

                    <p className='text-sm absolute bottom-0 right-0 p-4'>
                        Today is Wednesday, Octovty 02, 2024 04:51:24
                    </p>
                </>
            }
        />
    </div>
  )
}

export default DashboardScreen;
