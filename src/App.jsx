import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login/page";
import Register from "./pages/auth/Register/page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
