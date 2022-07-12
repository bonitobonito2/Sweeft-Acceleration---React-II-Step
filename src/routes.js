import Users from "./pages/all-users-page";
import UserProfile from "./pages/user-profile";
const routes = [
  { path: "/", element: <Users />, id: 1 },
  { path: "/user/:id", element: <UserProfile />, id: 2 },
  { path: "*", element: <Users />, id: 3 },
];

export default routes;
