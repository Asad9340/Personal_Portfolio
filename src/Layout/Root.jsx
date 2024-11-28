import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar/Navbar"
import Footer from "../Pages/Footer/Footer"

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Root