import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {

  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Today is: {day}<br />
        </h1>
        <button onClick={getNextDay}>
          Get next day
        </button>
        <h2>
          {
            prevDay && (
              <span>Previous work day was: {prevDay}</span>
            )
          }
        </h2>
      </header>
    </div>
  );
}

// Custom useHook
function usePrevious(val) {
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  },[val]);

  return ref.current;
}

export default App;
