import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name:"privacy",
  initialState:false,
  reducers:{
    toggle: (state)=>{
      return state = !state;  //jbb hmm koi expression likhte hai toh voh by default return hota hai but yha
    }                        //hmm koi expression nhi likh rhe the isliye hmme return statement bhi likhni pddi
  }
});

export const privacyActions = privacySlice.actions;
export default privacySlice;