import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {ThemeProvider} from "./Contexts/ThemeContext";
import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";


function App() {

  const [ThemeMode , setThememode] = useState();

const darkTheme=()=>{
  setThememode('dark');
}
const lightTheme = ()=>{
  setThememode('light');
}

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light');
    document.querySelector('html').classList.add(ThemeMode);
  },[ThemeMode])

  return (
    <ThemeProvider value={{ThemeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
