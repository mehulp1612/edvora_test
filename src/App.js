import './App.css';
import {useEffect, useState} from 'react';
import Header from './components/header';
import Filters from './components/filters';

function App() {
  const [user,setUser]=useState();
  const [stations,setStations]=useState();

  useEffect(async ()=>{

    const userResponse=await (await fetch('https://assessment.api.vweb.app/user')).json();
    // const user1=await user.json();
    console.log(userResponse);
    setUser(userResponse);

    const stationsResponse = await (await fetch('https://assessment.api.vweb.app/rides')).json();
    await setStations(stationsResponse);
    console.log(stationsResponse);
  },[]);

  return (
    <>
      <Header userData={user}></Header>
      <Filters userData={user} stationData={stations}></Filters>
    </>
  );
}

export default App;
