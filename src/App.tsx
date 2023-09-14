import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Content from './components/Content';

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
     <Content/>
    </div>
  );
}

export default App;
