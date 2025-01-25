import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AddSkills from '../Pages/Dashboard/AddSkills/AddSkills';
import AddExperience from '../Pages/Dashboard/AddExperience/AddExperience';
import UpdateSkills from '../Pages/Dashboard/AddSkills/UpdateSkills';
import UpdateExperience from '../Pages/Dashboard/AddExperience/UpdateExperience';
import AddProjects from '../Pages/Dashboard/AddProjects/AddProjects';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import UpdateProject from '../Pages/Dashboard/AddProjects/UpdateProject';
import AddBlog from '../Pages/Dashboard/AddBlog/AddBlog';
import UpdateBlog from '../Pages/Dashboard/AddBlog/UpdateBlog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/project-details/:id',
        element: <ProjectDetails />,
      },
      {
        path: '/sign-in',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/add-skills',
        element: <AddSkills />,
      },
      {
        path: '/update-skill/:id',
        element: <UpdateSkills />,
      },
      {
        path: '/add-experience',
        element: <AddExperience />,
      },
      {
        path: '/update-experience/:id',
        element: <UpdateExperience />,
      },
      {
        path: '/add-projects',
        element: <AddProjects />,
      },
      {
        path: '/update-project/:id',
        element: <UpdateProject/>
      },
      {
        path: '/add-blog',
        element:<AddBlog/>
      },
      {
        path: '/update-blog/:id',
        element:<UpdateBlog/>
      }
    ],
  },
]);
