import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(() => {
    const savedTotal = localStorage.getItem("total");
    return savedTotal ? parseInt(savedTotal) : 0;
  });

  useEffect(() => {
    const savedTotal = localStorage.getItem("total");
    if (savedTotal) {
      setTotal(parseInt(savedTotal));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("total", total);
  }, [total]);

  const handleAddTip = (amount) => {
    setTotal(total + amount);
  };

  const handleReset = () => {
    setTotal(0);
  };

  return (
    <>
      <div>
        <h1>Calculator Tips</h1>
        <p className="total">Total: {total} lei </p>
        <button onClick={() => handleAddTip(5)}>+5 lei</button>
        <button onClick={() => handleAddTip(10)}>+10 lei</button>
        <button onClick={() => handleAddTip(15)}>+15 lei</button>
        <button onClick={() => handleAddTip(20)}>+20 lei</button>
      </div>
      <div>
        <button onClick={handleReset} className="reset">
          Reseteaza
        </button>
      </div>
    </>
  );
}

export default App;
