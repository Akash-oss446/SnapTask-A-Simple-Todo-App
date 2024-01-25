import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todolist from './todolist';
function App() {
  const [inputl,setinputlist]=useState("");
  const [items,setitems]=useState([]);
  const itemEvents=(e)=>{
     setinputlist(e.target.value);
  }
  const deleteitems=(id)=>{
   setitems((olditems)=>{
    return olditems.filter((a,index)=>{
      return index!==id;
    })
   })
  }
  const ListofItems=()=>{
   setitems((olditems)=>{
    return [...olditems,inputl];
   });
   setinputlist('')
  }
  return (
    <div className="main_div">
      <div className='center_div'>
        <h1>SnapTask</h1>
        <h2> A simple and efficient way to manage your tasks.</h2>
        <br />
        <input type='text' value={inputl} placeholder='Add a Item' onChange={itemEvents}>
        </input>
        <button onClick={ListofItems}>Add</button>
        <br></br>
        
        <ul>
        List of Items
          {items.map((itemvalue,index)=>{
           return <Todolist key={index} id={index} text={itemvalue} onSelect={deleteitems} />;
          })}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
