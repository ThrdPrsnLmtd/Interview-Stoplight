import React from 'react';
import './App.css';

const stopLight = {
  on: "stop-circle-on",
  off: "stop-circle-off",
  timeOn: 2 
};

const slowLight = {
  on: "slow-circle-on",
  off: "slow-circle-off",
  timeOn: 1
};

const goLight = {
  on: "go-circle-on",
  off: "go-circle-off",
  timeOn: 5 
};

const lightCycle = [stopLight, slowLight, goLight];

function App() {
  const [currentLight, setCurrentLight] = React.useState(0);

  const lightTimer = React.useCallback(() => {
    const updateLight = () => {
      setCurrentLight((currentLight+1)%lightCycle.length);
    }

    setTimeout(updateLight, 1000*lightCycle[currentLight].timeOn);
  }, [currentLight]);

  lightTimer();

  return (
    <div className="App">
      <div id="box">
        <div id={
          currentLight === 0 ?
          lightCycle[0].on
          : lightCycle[0].off
        }></div>
        <div id={
          currentLight === 1 ?
          lightCycle[1].on
          : lightCycle[1].off
        }></div>
        <div id={
          currentLight === 2 ?
          lightCycle[2].on
          : lightCycle[2].off
        }></div>
      </div>
    </div>
  );
}

export default App;
