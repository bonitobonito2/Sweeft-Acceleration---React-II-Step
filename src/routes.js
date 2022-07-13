import Users from "./pages/all-users-page";
import SingleUser from "./pages/SingleUser";
const routes = [
  { path: "/", element: <Users />, id: 1 },
  { path: "/user/:id", element: <SingleUser />, id: 2 },
  { path: "*", element: <Users />, id: 3 },
];

export default routes;
