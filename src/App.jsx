import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home/Home'
import OurMenus from './pages/OurMenus/OurMenus/OurMenus'
import OurShop from './pages/OurShop/OurShop/OurShop'
import ContactUs from './pages/ContactUs/ContactUs'
import SignUp from './authentication/SignUp/SignUp'
import Signin from './authentication/Signin/Signin'
import DashboardLayout from './layout/DashboardLayout'
import Cart from './pages/Dashboard/Cart/Cart'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import AllUsers from './pages/Dashboard/Admin/AllUsers/AllUsers'
import AdminRoute from './AdminRoute/AdminRoute'
import AddItem from './pages/Dashboard/Admin/AddItem/AddItem'
import ManageItems from './pages/Dashboard/Admin/ManageItems/ManageItems'
import AdminHome from './pages/Dashboard/Admin/AdminHome/AdminHome'
import UserHome from './pages/Dashboard/UserHome/UserHome'

function App() {
  const routers = createBrowserRouter([
    {path: '/', errorElement: <ErrorPage />, element: <MainLayout />, children: [
      {path: '/', element: <Home />},
      {path: 'our-menu', element: <OurMenus />},
      {path: 'our-shop/:category', element: <OurShop />},
      {path: 'contact-us', element: <ContactUs />},
      {path: 'sign-up', element: <SignUp />},
      {path: 'sign-in', element: <Signin />}
    ]},
    {
      path: 'dashboard', element: <DashboardLayout />, children: [
        // admin only
        {path: 'admin-home', element: <AdminRoute><AdminHome /></AdminRoute>},
        {path: 'add-item', element: <AdminRoute><AddItem /></AdminRoute>},
        {path: 'manage-items', element: <AdminRoute><ManageItems /></AdminRoute>},
        {path: 'all-users', element: <AdminRoute><AllUsers /></AdminRoute>},

        // normal user
        {path: 'user-home', element: <PrivateRoute><UserHome /></PrivateRoute>},
        {path: 'cart', element: <PrivateRoute><Cart /></PrivateRoute>}
      ]
    }
  ])

  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
