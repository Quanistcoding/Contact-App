import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";
import UserDetaillPage from "./pages/UserDetaillPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./pages/PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { index: true, element: <HomePage /> },
      { path: ":id", element: <UserDetaillPage /> },
      { path: "add", element: <AddContactPage /> },
      { path: "edit/:id", element: <EditContactPage /> },
    ],
  },
]);

export default routes;
