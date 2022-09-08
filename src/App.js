import HomePage from "./components/HomePage";
import Login from "./components/Login";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      
      </Routes>
    </div>
  );
}

export default App;
