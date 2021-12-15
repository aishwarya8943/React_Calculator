import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const App = () => {

  const [result,setResult] = useState("");
  const [flag,setFlag] =useState(false)
  const ops = ['+','-','/','*']


  const handleClick = (val)=>{
    if (flag && !ops.includes(val.target.name))
      setResult (val.target.name)
    else
      setResult (result.concat(val.target.name))
    setFlag(false)
  }

  const backSpace = ()=>{
    setResult(result.slice(0,result.length-1))
  }

  const clearInput = () =>{
    setResult( "")
  }

  const calculateResult =()=>{
    if (result === "")
      return;
    setResult(eval(result).toString());
    setFlag(true)
  }
  return (
    <div className="App">
      <div className="input-type">
        {/* <input type ="text" value ={result}></input> */}
        {result}
      </div>
      <div className="button-type">
        <button id ="clear" onClick ={clearInput}>clear</button>
        <button id ="operator" onClick ={backSpace}>c</button>
        <button id ="operator" name ="+" onClick ={handleClick}>+</button>
        <button id ="digit" name ="7" onClick ={handleClick}>7</button>
        <button id ="digit" name ="8" onClick ={handleClick}>8</button>
        <button id ="digit" name ="9" onClick ={handleClick}>9</button>
        <button id ="operator" name ="-" onClick ={handleClick}>-</button>
        <button id ="digit" name ="4" onClick ={handleClick}>4</button>
        <button id ="digit" name ="5" onClick ={handleClick}>5</button>
        <button id ="digit" name ="6" onClick ={handleClick}>6</button>
        <button id ="operator" name ="*" onClick ={handleClick}>*</button>
        <button id ="digit" name ="1" onClick ={handleClick}>1</button>
        <button id ="digit" name ="2" onClick ={handleClick}>2</button>
        <button id ="digit" name ="3" onClick ={handleClick}>3</button>
        <button id ="operator" name ="/" onClick ={handleClick}>/</button>
        <button id ="digit" name ="0" onClick ={handleClick}>0</button>
        <button id ="operator" name ="." onClick ={handleClick}>.</button>
        <button id ="result" name ="=" onClick ={calculateResult}>=</button>
   
      </div>
    </div>
  );
}

export default App;
