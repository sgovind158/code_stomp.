import * as signupAction from "./actionTypes"

const initState  = {
    data: [],
  isLoading: false,
  isError: false,
}


const Signreducer = (state = initState , action)=>{

    const {type,payload}=action
    switch(type){
     case signupAction.GET_DATA_REQUEST:
            return {
             isLoading: true,
            isError: false,
            }
       case signupAction.GET_DATA_SUCCESS:
         return{
           data: [...payload],
           isLoading: false,
           isError: false,
         }     
       case signupAction.GET_DATA_FAILURE:
         return{
         
           isLoading: false,
           isError: true,
         } 
    default:
    return state
        }
}

export {Signreducer}