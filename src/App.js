import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Tabs from './Components/Tabs'

function App() {
  let arr = ['Tab 1', 'Tab 2', 'Tab 3','Tab 4', 'Tab 5']
  const [current, setCurrent] = useState(arr[0])
  const clickBtn = test => { 
    setCurrent(test)
  }


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">

        <div className="card">
          <div className="card-header">
          {
            arr.map((item, i) =>
              <button key={i} className="btn btn-danger px-3 mr-1 " onClick={()=> clickBtn(item)} value ={item}>{item} </button>
            )
          }
          </div>
          <div className="card-body">
            <Tabs current={current}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
