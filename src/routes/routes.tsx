import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { generateRoute } from "../utils/routeGenerator";
import { dashboardRoutes } from "./dashboard.routes";
import Login from "../pages/Auth/Login";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />
        },
        {
            path: '/dashboard',
            element: <App />,
            children: generateRoute(dashboardRoutes)
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <h3>Register</h3>
        }
    ]
)
export default router;