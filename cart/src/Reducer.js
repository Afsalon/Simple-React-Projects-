function reducer(state,action){
  if (action.type == 'Initialize'){
    return{
      ...state,
      phones:action.payload,
      isLoading:false,
      isModal:false,
      modal:'currently contains nothing'
    }
  }
  if (action.type == 'CLEAR_ALL'){
    return{
      ...state,
      phones:[],
      isLoading:false,
      isModal:true,
      modal:'currently contains nothing'

    }
}

  if (action.type == 'RemoveItem'){
    const new_phones = state.phones.filter((phone_obj)=>{
        if (phone_obj.id != action.payload){
          return phone_obj
        }
        else{
          state.valu = parseFloat((parseFloat(state.valu) - (parseFloat(phone_obj.amount)*parseFloat(phone_obj.price))).toFixed(2));
        }
    })
    const len = new_phones.length;
    return{
      ...state,
      phones:new_phones,
      isLoading:false,
      isModal:len?false:true,
      modal:'currently contains nothing'
    }
  }

  if (action.type =='Increase_amount'){
    const newer = state.phones.filter((phone_obj)=>{
      if (phone_obj.id == action.payload){
        phone_obj.amount+=1;
        state.valu += parseFloat(phone_obj.price)
        state.valu = parseFloat((state.valu).toFixed(2));
        return phone_obj
      }
      else{
        return phone_obj
      }
    })
    return{
      ...state,
      phones:newer,
      isLoading:false,
      isModal:false,
      modal:'currently contains nothing'
    }
  }

  if (action.type =='Decrease_amount'){
    const news = state.phones.filter((phone_obj)=>{
      if (phone_obj.id == action.payload){
          phone_obj.amount-=1;
          state.valu -= parseFloat(phone_obj.price)
          state.valu = parseFloat((state.valu).toFixed(2));
          if (phone_obj.amount < 1){
            console.log('deleted')
          }
          else{
            return phone_obj
          }
      }
      else{
        return phone_obj
      }
    })
    const lent = news.length;
    return{
      ...state,
      phones:news,
      isLoading:false,
      isModal:lent?false:true,
      modal:'currently contains nothing'
    }
  }

}
export default reducer;
