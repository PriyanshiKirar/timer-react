import { useState } from "react" ;

const App = () => {
  const [time, settime]=useState(new Date().toLocaleTimeString());
  setInterval(()=>{
    settime(new Date().toLocaleTimeString());
  }, 1000)
  return (
    <div>
      <h1 className="text-center mt-10 text-4xl">{time}</h1>
    </div>
  )
}

export default App