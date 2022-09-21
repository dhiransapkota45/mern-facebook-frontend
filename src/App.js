import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Videos from "./components/Videos";
import ContextComponent from "./context/context";
import { useState } from "react";
import { NewContext } from "./context/context";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [addFriend, setAddFriend] = useState()
  const BaseURL = "http://localhost:8000";
  return (
    <NewContext.Provider value={{ openModal, setOpenModal, BaseURL, addFriend, setAddFriend }}>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </NewContext.Provider>
  );
}

export default App;
