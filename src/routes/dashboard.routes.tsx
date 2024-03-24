import CreateSupply from "../pages/Dashboard/CreateSupplyPage/CreateSupply";
import AllSupplyDashboard from "../pages/Dashboard/DashboardRoot/AllSupplyDashboard";
import DashboardRoot from "../pages/Dashboard/DashboardRoot/DashboardRoot";
import DonorLeaderBoard from "../pages/Dashboard/DonorLeaderBoard/DonorLeaderBoard";
import Testimonial from "../pages/Dashboard/Testimonial/Testimonial";

export const dashboardRoutes = [
    {
        name: "Dashboard",
        path: "/dashboard",
        element: <DashboardRoot />,

    },
    {
        name: "Supplies",
        path: "/dashboard/supplies",
        element: <AllSupplyDashboard />,

    },
    {
        name: 'Create Supply',
        path: '/dashboard/create-supply',
        element: <CreateSupply />
    },
    {
        name: 'Create Testimonial',
        path: '/dashboard/create-testimonial',
        element: <Testimonial />
    },
    {
        name: 'Top Donors',
        path: '/dashboard/top-donors',
        element: <DonorLeaderBoard />
    }


];