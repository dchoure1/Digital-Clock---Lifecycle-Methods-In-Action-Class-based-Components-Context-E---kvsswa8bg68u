import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [d,setD] = useState(new Date());
 
function cDate(){
  setD(new Date);
}

const timerId = setInterval(cDate, 1000);
  return (
    <div id="main">
      <div className="date-time">{d.toLocaleString()}</div>
      
    </div>
  )
}


export default App;
