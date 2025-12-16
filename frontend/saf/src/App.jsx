
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/Adminlogin"
import Facultyauth from "./pages/Facultyauth";
import FacultyRegister from "./pages/FacultyRegister";

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<h1>It works</h1>}/>
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/login" element={<Facultyauth/>}/>
        <Route path="/register" element={<FacultyRegister/>}/>
      </Routes>
    </Router>)
}

export default App;
