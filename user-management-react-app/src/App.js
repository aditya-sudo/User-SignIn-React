import Entry from "./components/Entry";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
function App() {
  const [islogin, setLogin] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry setLogin={setLogin} />} />
        {!islogin ? (
          <Route path="/home" element={<Navigate replace to="/" />} />
        ) : (
          <Route path="/home" element={<Home />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
