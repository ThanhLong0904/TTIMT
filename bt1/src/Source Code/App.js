import logo from './logo.svg';
import './App.css';
import  {useState}  from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [numberState, setNumberState] = useState()
  console.log(numberState)
  return (
    <div className="App">
      <div className="wrapper_table">
        <div className='table'>
        {numbers.map(function(number, index) {
          return(
            <div className="table_item" key={number} 
              style={numberState === number ? {
                color:' #fff',
                backgroundColor:'#0c4a6e'
              } : {}}
            >
                {number}
            </div>
          )
        })}
        </div>
      </div>
        <div className="btn">
          {numbers.map(function(number, index) {
            return(
              <button onClick={() => setNumberState(number)} className="btn_item" key={index}>{number}</button>
            )
          })}
        </div>
    </div>
  );
}

export default App;
