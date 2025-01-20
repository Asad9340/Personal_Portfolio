import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import ProjectDetails from '../components/ProjectDetails/ProjectDEtails';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AddSkills from '../Pages/Dashboard/AddSkills/AddSkills';

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
        element: <SignUp/>
      },
      {
        path: '/add-skills',
        element: <AddSkills/>
      },
    ],
  },
]);
