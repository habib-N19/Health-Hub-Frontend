import { useLocation } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import DashboardLayout from "./components/Layout/DashboardLayout"
import { useAppSelector } from "./redux/hooks"
import { selectTheme } from "./redux/features/theme/themeSlice"
import { ConfigProvider, theme } from "antd"
import PrivateRoute from "./components/Layout/PrivateRoute"

function App() {
  const themeLocal = useAppSelector(selectTheme)
  const location = useLocation()
  const isDashboard = location.pathname.includes('/dashboard')
  // const lightTheme = {
  //   colorPrimary: '#4096ff',
  //   colorSecondary: '#4096ff',
  //   colorTextBase: '#000000',
  //   // colorTextLightSolid: '#000000',
  //   colorBgContainer: '#fff'
  // }
  // const darkTheme = {
  //   colorPrimary: '#4096ff',
  //   colorSecondary: '#4096ff',
  //   colorTextBase: '#fff',
  //   // colorTextLightSolid: '#ffffff',
  //   colorBgContainer: '#000'
  // }
  return (
    <ConfigProvider theme={
      {
        // token: theme === 'light' ? lightTheme : darkTheme,
        algorithm: themeLocal === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
        components: {
          Layout: {
            // colorBgHeader: themeLocal === 'light' ? "black" : 'skyblue',
            // colorBgBody: themeLocal === 'light' ? "skyblue" : 'black',
          }
        }
      }
    } >
      <>
        {
          isDashboard ? <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
            : <MainLayout />
        }
      </>
    </ConfigProvider >
  )
}

export default App
