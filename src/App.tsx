import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./common/components/Header";
import Home from "./pages/home/Home";
import Footer from "./common/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from "./pages/website/Website";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("themePreference");
    if (storedTheme === "light") {
      setDarkTheme(false);
    }
  }, []);
  return (
    <div className={`App ${darkTheme && " dark"}`}>
      <BrowserRouter>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route
            path="/"
            element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />}
          />
          <Route
            path="/website/:id"
            element={
              <Website darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            }
          />
        </Routes>
        <Footer darkTheme={darkTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
