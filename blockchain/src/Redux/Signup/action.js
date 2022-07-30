import types from "./actionTypes"
import axios from "axios";
import * as signupAction from "./actionTypes";

export const getDataReq = () => ({
    type: signupAction.GET_DATA_REQUEST
  });
  
  export const getDataSucc = (data) => ({
    type: signupAction.GET_DATA_SUCCESS,
    payload: data
  });
  
  export const getDataFail = () => ({
    type: signupAction.GET_DATA_FAILURE
  });
  

  export const sendData = (payload) => (dispatch) => {
   
    const couReqAction = getDataReq();
    dispatch(couReqAction);
    
    return axios.post(
      `https://applivemasai.herokuapp.com/signup`,payload
     
    )
      .then((res) => {

        const couSucAction = getDataSucc(res.data);
        dispatch(couSucAction)
      })
      .catch((err) => {
        const couErrorAction = getDataFail();
        dispatch(couErrorAction);
      });
  };

