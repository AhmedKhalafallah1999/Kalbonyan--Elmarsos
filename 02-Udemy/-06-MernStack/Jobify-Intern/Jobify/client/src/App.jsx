import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Register,
  Error,
  Login,
  DashboardLayout,
  Landing,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from "./pages/index";
// importing loading
import { loader as loaderDashboard } from "./pages/DashboardLayout";
import { loader as loaderAllJobs } from "./pages/AllJobs";
import { loader as loaderEditJob } from "./pages/EditJob";
// importing actions
import { Action as registerAction } from "./pages/Register";
import { Action as loginAction } from "./pages/Login";
import { Action as AddJobAction } from "./pages/AddJob";
import { Action as EditJobAction } from "./pages/EditJob";
import { Action as DeleteJobAction } from "./pages/DeleteJob";
import { loader as adminLoader } from "./pages/Admin";
import { loader as statsLoader } from "./pages/Stats";
import { Action as profileUpdateAction } from "./pages/Profile";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("darkTheme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        loader: loaderDashboard,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: AddJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: loaderAllJobs,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileUpdateAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: loaderEditJob,
            action: EditJobAction,
          },
          {
            path: "delete-job/:id",
            action: DeleteJobAction,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
