"use client";

import Dashboard from "@/components/sections/dashboard/Dashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dashboard>
            {children}
        </Dashboard>
    );
};

export default DashboardLayout;
