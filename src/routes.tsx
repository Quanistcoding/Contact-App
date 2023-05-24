import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AddContactPage from "./pages/AddContactPage";
import EditContactPage from "./pages/EditContactPage";
import UserDetaillPage from "./pages/UserDetaillPage";
import LoginPage from "./pages/LoginPage";
import ButtetinPage from "./pages/ButtetinPage";
import AddBulletinPage from "./pages/AddBulletinPage";
import BulletinDetailPage from "./pages/BulletinDetailPage";
import EditBulletinPage from "./pages/EditBulletinPage";
import ChatroomPage from "./pages/ChatroomPage";

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
      { path: "bulletin", element: <ButtetinPage /> },
      { path: "bulletin/add", element: <AddBulletinPage /> },
      { path: "bulletin/edit/:id", element: <EditBulletinPage /> },
      { path: "bulletin/:id", element: <BulletinDetailPage /> },
      { path: "/chatroom", element: <ChatroomPage /> },
    ],
  },
]);

export default routes;
