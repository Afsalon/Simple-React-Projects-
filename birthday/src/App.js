import React,{useState} from 'react';
import {data} from './components/data';
import BirthdayBlock from './components/BirthdayBlock';

function App() {
  const [mydata,setMydata] = useState(data);
  const [mynumber,setMynumber] = useState(data.length)
  const list = mydata.map((friend)=>{
    return(
      <BirthdayBlock key={friend.id} {...friend} />
    );
  });
  return (
    <div className='bg'>
      <div className='list'>
        <p className='heading'>{mynumber} Birthdays Today</p>
        {[list]}
        <button className='del' type='button' onClick={()=>{setMydata([]);setMynumber(0)}}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
