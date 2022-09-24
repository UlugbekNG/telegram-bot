import { useEffect } from "react";
import "./App.css";

import MainScreen from "./components/MainScreen/MainScreen";

function App() {
  const telegram = window.Telegram.WebApp;

  useEffect(() => {
    telegram.ready();
  });

  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}

export default App;
