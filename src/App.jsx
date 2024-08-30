import React, { useState, useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SaveNotes from "./components/SaveNotes";
import Register from "./pages/Register";

const App = () => {
  const location = useLocation();
  const showInput = ["/"].includes(location.pathname);
  const [newTitle, setNewTitle] = useState("");

  const titleName = () => {
    if (location.pathname === "/") {
      setNewTitle("Notes.");
    } else {
      setNewTitle("Register.");
    }
  };
  // console.log(location.pathname);

  useEffect(() => {
    titleName();
  }, [newTitle]);

  return (
    <div>
      <Navbar title={newTitle} />
      {showInput && <SaveNotes />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
