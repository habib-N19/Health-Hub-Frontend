import { useLocation } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import DashboardLayout from "./components/Layout/DashboardLayout"

function App() {
  const location = useLocation()
  const isDashboard = location.pathname.includes('/dashboard')
  console.log(isDashboard);

  return (<>
    {
      isDashboard ? <DashboardLayout >
      </DashboardLayout> : <MainLayout />
    }
  </>
  )
}

export default App
