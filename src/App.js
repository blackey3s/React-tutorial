import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componenes/HomePage";
import AboutPage from "./componenes/AboutPage";
import NavComponents from "./componenes/NavComponents"
const App = () => {
    return (
      <BrowserRouter>
        <NavComponents/>
        <Routes>
          <Route  index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    )
  }

  export default App;






  
