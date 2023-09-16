import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './common/components/Header';
import Home from './pages/Home';
import Footer from './common/components/Footer';

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("themePreference");
    if (storedTheme === "light") {
      setDarkTheme(false);
    }
  }, []);
  return (
    <div className={`App ${darkTheme && ' dark'}`}>
     <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
     <Home darkTheme={darkTheme}/>
     <Footer darkTheme={darkTheme}/>
    </div>
  );
}

export default App;
