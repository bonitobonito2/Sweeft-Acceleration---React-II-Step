import UsersMain from "./pages/all-users-page";
import SingleUser from "./pages/SingleUser";
const routes = [
  { path: "/", element: <UsersMain />, id: 1 },
  { path: "/user/:id", element: <SingleUser />, id: 2 },
  { path: "*", element: <UsersMain />, id: 3 },
];

export default routes;
