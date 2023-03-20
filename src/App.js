import { useState } from 'react';
import './App.css';

function App() {

  const [num, Setnum]= useState(0);
  const [Table, SetTable] = useState(0);

  function Multiply(){
    let Table = '';
    for (let i= 1; i<=10; i++){
      Table += `${num} x ${i}=${num * i} `;
    }
    SetTable(Table);
    
  }

  return (
    <>
    <div className="App">
      <label>Enter A Number
      <input type={"Number"} value={num} onChange={e => Setnum(e.target.value)}/>
      </label>
      <br/>
      <button onClick={Multiply}>Print Table</button>
    </div>
    <h2>{Table}</h2>
    </>
  );
}

export default App;
