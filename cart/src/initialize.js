import React,{useReducer,useState,useEffect} from 'react';
import reducer from './Reducer';
import Phone from './Phone';
function Initialize(){
// link
  const url ='https://course-api.com/react-useReducer-cart-project';
// initial state
  const InitialState = {
    phones:[],
    valu:2199.96,
    isLoading:true,
    isModal:false,
    modal:'currently contains nothing'
  }
  const[state,dispatch] = useReducer(reducer,InitialState);
// fetch try catch
  const getData = async() =>{
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch({type:'Initialize',payload:data});
    }
    catch{
        console.log('error');
    }
  }

// useEffect
  useEffect(()=>{
    getData();
  },[])


// returns
  if (state.isLoading){
    return(
      <h1 className='Load'>Loading...</h1>
    )
  }
  return(
    <>
      <h3 className='Header'>YOUR BAG</h3>
      {state.phones.map((phone_obj)=>{
            return(
              <Phone key={phone_obj.id} {...phone_obj} dispatch={dispatch}/>
            )
          })}
      {state.isModal?<h3 className='modal'>{state.modal}</h3>:<><hr/><div className='valuediv'><p className='total'>Total</p><p className='value'>${state.valu}</p></div><button type='button' className='clear' onClick={()=>dispatch({type:'CLEAR_ALL'})}>CLEAR CART</button></>}
    </>
  )

// end
}

export default Initialize;
