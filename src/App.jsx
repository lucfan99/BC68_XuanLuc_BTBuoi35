import { useState } from "react";
import HomeTemplate from "./components/HomeTemplate/HomeTemplate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeTemplate />
    </>
  );
}

export default App;
