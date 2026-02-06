import './App.css';
import React, { useEffect, useState } from 'react';

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
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
        </h1>
        <button onClick={getNextDay}>
          Get next day
        </button>
      </header>
    </div>
  );
}

function usePrevious(val) {
  const ref = React.useRef(null);

  useEffect(() => {
    
  },[]);
}

export default App;
