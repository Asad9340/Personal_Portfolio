import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  )
}

export default Root