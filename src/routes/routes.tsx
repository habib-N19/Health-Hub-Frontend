import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { generateRoute } from "../utils/routeGenerator";
import { dashboardRoutes } from "./dashboard.routes";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import HomePage from "../pages/Home/Home/HomePage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,

                    element: <HomePage />
                }
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