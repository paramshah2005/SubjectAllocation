
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/Adminlogin"
import Facultyauth from "./pages/Facultyauth";

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<h1>It works</h1>}/>
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/login" element={<Facultyauth/>}/>
      </Routes>
    </Router>)
}

export default App;
