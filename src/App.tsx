import { useState } from "react";
import "./App.css";
import PinInput from "./PinInput";

export type PinType = number | string | undefined;

function App() {
  const [pinValue, setPinValue] = useState<Array<PinType>>([]);

  return (
    <div className="App">
      <PinInput setPinValue={setPinValue} onSuccess={() => alert("good")} />
    </div>
  );
}

export default App;
