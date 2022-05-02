import { applyMiddleware , combineReducers , thunk } from "redux";

export const PRODUCT="PRODUCT";

export const middleware=(store)=>(next)=>(action)=>{
if(typeof store==="function"){
    getdata(dispatch(store))
}
else{
    next(action)
}
}



