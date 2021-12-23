import './main.css';
import reducer from './Reducer';
function Phone(props){
  const {id,title,price,img,amount,dispatch} =props;
  return(
    <div key={id} className='PhoneContainer'>
      <img className='PhonePic' src={img} alt={title}/>
      <div className='column2'>
        <h4 className='title'>{title}</h4>
        <h4 className='price'>${price}</h4>
        <button className='removeButton' onClick={()=>dispatch({type:'RemoveItem',payload:id})}>remove</button>
      </div>
      <div className='column3'>
        <button className='Increase' onClick={()=>dispatch({type:'Increase_amount',payload:id})}>&#9650;</button>
        <p className='amount'>{amount}</p>
        <button className='Decrease' onClick={()=>dispatch({type:'Decrease_amount',payload:id})}>&#9660;</button>
      </div>
    </div>
  );
}

export default Phone;
