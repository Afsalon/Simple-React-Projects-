import React,{useState} from 'react';
import "./tour.css";
function TourBlockFormation(props){
  const {id,name,info,image,price} = props;
  const [readMore, setReadMore] = useState(false);

  return(
    <>
      <div className='row1'>
        <img className='tourpic' src={image} alt='location picture'/>
      </div>
      <div className='row2'>
        <h4 className='title'>{name}</h4>
        <h4 className='cost'>${price}</h4>
      </div>
      <div className='row3'>
        <p className='info'>
           {readMore ? info : `${info.substring(0, 200)}...`}
           <button className='readmore' onClick={() => setReadMore(!readMore)}>
             {readMore ? 'show less' : '  read more'}
           </button>
        </p>
      </div>
    </>
  );
}

export default TourBlockFormation;
