import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { generateRoute } from "../utils/routeGenerator";
import { dashboardRoutes } from "./dashboard.routes";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import HomePage from "../pages/Home/Home/HomePage";
import Supplies from "../pages/Supplies/Supplies";
import SupplyDetail from "../pages/Supplies/SupplyDetail";
import Volunteer from "../pages/Volunteer/Volunteer";
import VolunteerForm from "../pages/Volunteer/VolunteerForm";
import Community from "../pages/Community/Community";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,

                    element: <HomePage />,

                },
                {
                    path: '/supplies',
                    element: <Supplies />,

                },
                {
                    path: '/supplies/top/:id',
                    element: <SupplyDetail />,
                }
                ,
                {
                    path: '/supplies/:id',
                    element: <SupplyDetail />,
                },
                {
                    path: '/community',
                    element: <Community />
                },
                {
                    path: '/volunteer',
                    element: <Volunteer />,

                },
                {
                    path: '/volunteer/:id',
                    element: <VolunteerForm />
                }
                ,
                {
                    path: '/about',
                    element: <AboutUs />
                },

            ]
        },
        {
            path: 'dashboard',
            element: <App />,
            children: generateRoute(dashboardRoutes)
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
)
export default router;