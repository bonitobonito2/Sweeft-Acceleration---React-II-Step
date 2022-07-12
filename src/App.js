import Users from "./pages/all-users-page";
import UserProfile from "./pages/user-profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
