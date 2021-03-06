import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState('');
  const inputRef = useRef();
  const handlerSubmit = () => {
    setJobs((prev) => [...prev, job]);
    setJob('');
    inputRef.current.focus();
  };
  return (
    <div className="app">
      <h1 className="heading">Todo List</h1>
      <input className="input_list" ref={inputRef} value={job} onChange={(e) => setJob(e.target.value)} placeholder="Todo List..." />
      <button className="btn_add"onClick={handlerSubmit}>ADD</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span 
              onClick={() => {
                const valueToRemove = job;
                const new_arr = jobs.filter((item) => item !== valueToRemove);
                return setJobs(new_arr);
              }}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
