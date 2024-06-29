import { configureStore, createSlice } from "@reduxjs/toolkit";
import privacySlice from "./privacy";
import counterSlice from "./counter";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState:{counterVal:0},
//   reducers:{
//     increment: (state)=>{  //yhaa mujhe actions nhi chahiye kyunki hrr ek ke liye meine ek individual method
//       state.counterVal++;  //bnaya hai toh actions alg se defien kre ki jrurt nhi hai                         
//     },
// //abb yhaa state mein hmme initial value set krne ki jrurt nhi hai kyunki yhaa hmne ek slice bnaa diya aur uske liye hmne make sure kiya hai initial state mein value set kiya hai toh vhaa se uski initial value le lega.
//     decrement: (state)=>{
//       state.counterVal--;
//     },
//     add: (state,action)=>{  //yha hmme actions chahiye hoga kyunki yhaa hmme payload nikaln hoga uske action se
//       state.counterVal += Number(action.payload);
//     },
//     subtract: (state,action)=>{
//       state.counterVal -= Number(action.payload);
//     }
//   }
// });

// const privacySlice = createSlice({
//   name:"privacy",
//   initialState:false,
//   reducers:{
//     toggle: (state)=>{
//       return state = !state;  //jbb hmm koi expression likhte hai toh voh by default return hota hai but yha
//     }                        //hmm koi expression nhi likh rhe the isliye hmme return statement bhi likhni pddi
//   }
// });

const counterStore = configureStore({reducer:{
  counter:counterSlice.reducer,
  privacy:privacySlice.reducer
}
});

// export const counterActions = counterSlice.actions;
// export const privacyActions = privacySlice.actions;
export default counterStore; 

//sbb slices ko alg alg files mein bhi store krr skte hai aur fir index file sirf store kaa kaam kregi jo sbb slices ko combine krke ek store bnaa rhi hogi
