import { useState } from 'react';

const grits = [
  'php',
  'react',
  'html/css'
]

function App() {
  const [grit, setgirt] = useState();

  const handleClick = () => {
    const index = Math.floor(Math.random()*grits.length)
    console.log(grits[index])
    setgirt(grits[index]);
  }
  return (
    <div className="App">
      <h1>{grit || "chưa có khóa học"}</h1>
      <button onClick={handleClick}>click me!!</button>
    </div>
  );
}

export default App;
