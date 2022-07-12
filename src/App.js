import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  console.log(routes);
  return (
    <div className="App">
      <Routes>
        {routes.map((state) => (
          <Route path={state.path} element={state.element} key={state.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
