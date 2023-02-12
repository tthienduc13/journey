import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShowCalendar from "./pages/ShowCalendar";
import TakeNote from "./pages/TakeNote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendar" element={<ShowCalendar />} />
        <Route path="/take-note" element={<TakeNote />} />
      </Routes>
    </>
  );
}

export default App;
