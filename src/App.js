import { useEffect, useState } from "react";
import Contador from "./components/Contador";

function App() {

  const [ count, setCount ] = useState(0);

  useEffect(() => {

    const localCount = Number(localStorage.getItem("count"));
  
    localCount ? setCount(localCount) : setCount(0);

  }, []);

  return (
    <div className="App">
      <Contador count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
