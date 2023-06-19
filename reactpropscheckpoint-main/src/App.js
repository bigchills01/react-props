import './App.css';
import Profile from './Profile/Profile';

import Ciromarr from "./Assets/Ciromarr.jpeg"


function App() {
  
  return (
    <div style={{backgroundColor:"lightblue", width:"70%", margin: "auto", border: "1px solid black", padding:"10px"}}>
      <h1 style={{textAlign: "center"}}>
      React Props Checkpoint
      </h1>
      <Profile fullName={"Ciroma Chukwuma Adekunle"} bio={"Over the years, Ciroma Chukwudi Adekunle has always been the name WASSCE have always used in all their question paper to the extent that the name has become so stuck to every student that every year we all look forward to seeing him re-write his WAEC examination. Seems like Ciroma Chukwuma Adekunle has finally passed his exams and WAEC has finally replaced him with Dikko Chinedu Oladapo."} profession={"Professional SSCE candidate"}>
        <img src={Ciromarr} alt="Ciroma" style={{width: "50%", marginLeft: 250}}/>
      </Profile>
    </div>
  );
}

export default App;
