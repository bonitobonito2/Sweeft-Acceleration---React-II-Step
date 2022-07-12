import Users from "./pages/all-users-page";
import UserProfile from "./pages/user-profile";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  console.log(routes)
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<Users />} /> */}
        {routes.map((state) => (
          <Route
            path={state.path}
            element={state.element}
            key={state.uniqueKey}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
