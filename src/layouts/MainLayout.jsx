import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-4">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout