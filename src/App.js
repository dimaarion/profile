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
    <div className="container profile">
     {profie.map((prof,i)=><div key={prof.brandName + i}>
     <div><label htmlFor='nameProfile' >Название профиля</label></div> 
     <div><input className='h-8 border-2 border-blue-300' defaultValue={prof.brandName} /></div> 
      </div>)}
     
    </div>
  );
}

export default App;
