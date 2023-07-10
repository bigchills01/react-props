import './App.css';
import Profile from './Profile/Profile';

import pics from "./Assets/pics.jpg"


function App() {
  
  return (
    <div style={{backgroundColor:"grey", width:"70%", margin: "auto", border: "1px solid black", padding:"10px"}}>
      <h1 style={{textAlign: "center"}}>
      React Props Checkpoint
      </h1>
      <Profile fullName={"james leumas"} bio={"i play with things on the web,i build the future web, i'm a programming language. i'm the a project"} profession={"IOT Engineer"}>
        <img src={pics} alt="pics" style={{width: "50%", marginLeft: 250}}/>
      </Profile>
    </div>
  );
}

export default App;
