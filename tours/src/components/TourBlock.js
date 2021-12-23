import React,{useState,useEffect} from 'react';
import TourBlockFormation from './TourBlockFormation';
import './tour.css';


function TourBlock(){
  // variables
  const url = 'https://course-api.com/react-tours-project';
  const [isLoading,setIsLoading] =useState(true);
  const [isError,setIsError] = useState(false);
  const [tour,setTour] = useState([]);
  const [heading,setHeading] = useState('Our Tours')

  // filter
  function RemoveIt(id){
    const new_tour = tour.filter((t)=>{
      if (t.id != id){
        return(t)
      }
    })
    setTour(new_tour)
    if (new_tour.length == 0){
      setHeading('No more tours left')
    }
  }
// getData
const getData = async() =>{
  setIsLoading(true);
  try{
    const response = await fetch(url);
    const tours = await response.json();
    setTour(tours);
    setIsLoading(false);
  }
  catch(e){
    setIsLoading(false);
    setIsError(true);
    console.log(e);
  }


}
//useEffect to initiate fetching
useEffect(()=>{
  getData()
},[]);

// return component
  if (isLoading){
    return<h1 className='tourtitle'>Loading..</h1>
  }
  if (isError){
    return<h1 className='tourtitle'>error..</h1>
  }
  return (
    <>
      <h1 className='tourtitle'>{heading}</h1>
      <hr className='underline'/>
      {tour.map((place)=>{
        return (
          <div key={place.id} className='row'>
            <TourBlockFormation key={place.id} {...place}/>
            <div className='row4'>
              <button type='button' className='remove' onClick={()=>RemoveIt(place.id)}>Not Interested</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default TourBlock;
