import React from 'react';
import './main.css';

function BirthdayBlock(props){
  const {id,img,name,age} = props;
  return(
    <div key={id} className='row'>
      <img className='profilepic' src={img} alt='dp'/>
      <div>
        <h4 className='name'>{name}</h4>
        <p className='age'>{age} Years</p>
      </div>
    </div>
  );
}

export default BirthdayBlock;
