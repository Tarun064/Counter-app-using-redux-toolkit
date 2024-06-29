import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState:{counterVal:0},
  reducers:{
    increment: (state)=>{  //yhaa mujhe actions nhi chahiye kyunki hrr ek ke liye meine ek individual method
      state.counterVal++;  //bnaya hai toh actions alg se defien kre ki jrurt nhi hai                         
    },
//abb yhaa state mein hmme initial value set krne ki jrurt nhi hai kyunki yhaa hmne ek slice bnaa diya aur uske liye hmne make sure kiya hai initial state mein value set kiya hai toh vhaa se uski initial value le lega.
    decrement: (state)=>{
      state.counterVal--;
    },
    add: (state,action)=>{  //yha hmme actions chahiye hoga kyunki yhaa hmme payload nikaln hoga uske action se
      state.counterVal += Number(action.payload);
    },
    subtract: (state,action)=>{
      state.counterVal -= Number(action.payload);
    }
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice;
