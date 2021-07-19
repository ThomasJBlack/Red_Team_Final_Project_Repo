import React, { useEffect, useState } from 'react'

import './App.css';

import Restaurant from './components/pages/restaurant';

function App() {
  const [currentTime, setCurrentTime] = useState(1);

  // useEffect(() => {
  //   fetch("/time").then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  return (
    <Restaurant />
  );
}

export default App;
