import Users from "./pages/all-users-page"
import UserProfile from "./pages/user-profile"
const routes = [
    {path : '/', element  : <Users />, uniqueKey : 1},
    {path : '/user/:id', element  : <UserProfile />, uniqueKey : 2},
    {path : '*', element  : <Users />, uniqueKey : 3},
]

export default routes