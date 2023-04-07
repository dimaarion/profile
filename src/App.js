import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './profile.css';
import axios from 'axios';

function App() {
  const[profie, setProfile]=useState([{}]);
  useEffect(()=>{
    axios.get("https://sandaniprim.md/cache/profile").then((response)=>setProfile(response.data))
  },[setProfile])
  return (
    <div className="profile it-text-3xl font-bold underline">
     {profie.map((prof,i)=><div key={prof.brandName + i}><input defaultValue={prof.brandName} /></div>)}
     
    </div>
  );
}

export default App;
