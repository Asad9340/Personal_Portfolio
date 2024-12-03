import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import ProjectDEtails from "../components/ProjectDetails/ProjectDEtails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/project-details/:id',
        element:<ProjectDEtails/>
      }
    ]
  },
]);
