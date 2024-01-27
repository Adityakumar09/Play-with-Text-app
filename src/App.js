import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Upalerts from './components/Upalerts';
// import About from './components/About';
import React ,{ useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {

  const [mode,setmode]=useState(`light`);

  const [alerts,setalerts]=useState('null') ;

  const [btncol,setbtncol]=useState('white') ;

  const showalert= (message,type)=>{
    setalerts({
        msg:message ,
        type:type 
    })
    setTimeout(()=>{setalerts(`null`);},2000);
  }

  const redmode=()=>{
    if(btncol==='white'){
      setbtncol('red');
      // document.body.style.backgroundColor ='red';
      // document.body.style.color = 'yellow';
      showalert("Buttons are converted into redcolor","danger");
    }
    else{
      setbtncol('white');
      // document.body.style.backgroundColor ='white';
      // document.body.style.color = 'black';
    }
  }

  const togmode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='black';
      document.body.style.color = 'white';
      showalert("Dark mode has been enabled","success");
      document.title=`Play with text  -  dark `;
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white' ;
      document.body.style.color = 'black';
      showalert("Light mode has been enabled","success");
      document.title=`Play with text  -  Light `;
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="PLAY WITH TEXT" AboutText="About" mode={mode} togmode={togmode} redmode={redmode}/> 
    <Upalerts  alerts={alerts} /> 
    {/* <div className="container my-3"> */}
          {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>} /> */}
            {/* <Route exact path="/" element={<Textform Heading="Enter the text to analyze" showalert={showalert} btncol={btncol} />}/> */}

          {/* </Routes> */}
    {/* </div> */}
    {/* </Router> */}
    <div className="container my-3">
    <Textform Heading="Enter the text to analyze" showalert={showalert} mode={mode} btncol={btncol}  /> 
    {/* <About mode={mode} />  */}
    </div> 

    </>
  );
}

export default App;
