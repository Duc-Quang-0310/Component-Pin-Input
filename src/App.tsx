import { useState } from "react";
import "./App.css";
import PinInput from "./PinInput";
import Mock from "./Mock";

export type PinType = number | string | undefined;

function App() {
  const [pinValue, setPinValue] = useState<Array<PinType>>([1, 2, 3, 4]);

  return (
    <div className="App">
      <Mock />
    </div>
  );
}

export default App;
