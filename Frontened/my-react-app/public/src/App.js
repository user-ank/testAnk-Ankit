import React from "react";
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import Para from "./Para";
import List2 from "./List2";


function App() {

  const heading2={
    color:"rgb(255, 0, 0)",
    textAlign:"center",
    margin:"50px",
    fontFamily: "'Dancing Script', cursive"
    
    
    
    }


    const curdate=new Date().toLocaleDateString();
      const curtime=new Date().toLocaleTimeString();
      
      const img1="https://picsum.photos/200/300";
      const img2="https://picsum.photos/210/300";
      const img3="https://picsum.photos/220/300";
      const img4="https://picsum.photos/280/300";
      
      
      let currdate=new Date();
      let currtime=currdate.getHours();
      let greeting='';
      const cssStyle={};
      
      if (currtime>=1&&currtime<12) {
        
        greeting="Good Morning";
        cssStyle.color='green';
      }else if(currtime>=12&&currtime<19){
        greeting="Good Afternoon";
        cssStyle.color='yellow';
      }else{
        greeting="Good night";
        cssStyle.color='blue';
      }
      
      
      

  return (
    
    
      
      
      
      
      ReactDOM.render(
        <>
        
        <h2 className="heading1">{`current date is ${curdate}`}</h2>
        <h3 style={heading2}>{`current time is ${curtime}`}</h3>
      
        <div className="img_sec">
       <img src={img1} alt="random images"/>
       <img src={img2} alt="random images"/>
       <img src={img3} alt="random images"/>
      
      <a href="https://picsum.photos/">
      <img src={img4} alt="random images"/>
      </a>
      </div>
      
      
      
      
      <div className="heading3">
      
      <h1>Hello sir ,<span style={cssStyle}>{greeting}</span></h1>
      
      
        <Heading/>
        <Para/>
        <List2/>
      
        <List/>
        <List2/>
        
      </div>
      
      
      
      
      
        </>,document.getElementById("root")
        )
      
      
  );
}

export default App;
