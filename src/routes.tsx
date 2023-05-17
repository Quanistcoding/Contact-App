import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "add", element: <AddContactPage /> },
      { path: "edit/:id", element: <EditContactPage /> },
    ],
  },
]);

export default routes;
