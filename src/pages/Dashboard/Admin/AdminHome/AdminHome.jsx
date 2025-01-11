import React from 'react';
import DashboardRoutes from '../../../../components/DashboardRoutes/DashboardRoutes';
import useAuth from '../../../../hooks/useAuth';
import useAdmin from '../../../../hooks/useAdmin';

const AdminHome = () => {
    const { user } = useAuth();
    const [ isAdmin ] = useAdmin();


    return (
        <section className='admin-home'>
            <DashboardRoutes />

            <div className='container mx-auto px-6 py-12'>
                <h1 className='text-xl md:text-2xl text-slate-700'>Hi, <span className='font-medium text-slate-800'>{user && isAdmin ? user?.displayName : ''}</span> (Admin)</h1>
            </div>
        </section>
    );
};

export default AdminHome;