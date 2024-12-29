import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home/Home'
import OurMenus from './pages/OurMenus/OurMenus/OurMenus'

function App() {
  const routers = createBrowserRouter([
    {path: '/', errorElement: <ErrorPage />, element: <MainLayout />, children: [
      {path: '/', element: <Home />},
      {path: '/our-menu', element: <OurMenus />}
    ]}
  ])

  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
