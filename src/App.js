// import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'


// let time = new Date().toLocaleTimeString()
// // console.log(time)



const App = () =>{
  let time = new Date().toLocaleTimeString()
  const [currentTime , setTime] = useState(time);
  var date = new Date()
  date = date.toLocaleDateString()
  const UpdateTime = () =>{
    
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime, 1000);
  return (
    <>
    <div className='timeouter'>
      <p style={{color:'white'}}><strong>DATE</strong> :{date}</p>
    <h1 className='timeclock'><strong>TIME</strong> : {currentTime}</h1>
    </div>
    </>
  )
}

export default App;
