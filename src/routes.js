import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";

/*
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile/:id",
    element: <UserProfile />,
    errorElement: <ErrorPage />
  }
];
*/
const routes = [
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
          {
              path: "/",
              element: <Home />,
              children: [
                {
                    path: "/profile/:id",
                    element: <UserProfile />
                }
              ]
          }, 
          {
              path: "/about",
              element: <About />
          },
          {
              path: "/login",
              element: <Login />
          },
          {
              path: "/profile/:id",
              element: <UserProfile />
          }
      ]
  }
];

export default routes;