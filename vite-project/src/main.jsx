import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//utilized ReactDOM to guide routing for project
//ensure that Home page directs user to About Me page 

import App from './App';
//import Error from './pages/Error';
//import Home from './pages/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

// Define the accessible routes, and which components respond to which URL--within app you have parent '/' and children
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>,
      },

      {
        path: '/Contact',
        element: <Contact />,
      },

      {
        path:'/Resume',
        element: <Resume/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);