const regExp4Pass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$/;
const regExp4Email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


export const validateEmail = (campo)=>{
    if(regExp4Email.test(campo)){
      return true
    }else{
      return false
    }
  }
  
  export const validatePassword = (campo)=>{
    if(regExp4Pass.test(campo)){
      return true
    }else{
      return false
    }
  
  }