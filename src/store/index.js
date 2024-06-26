import { createStore } from "redux";

const INITIAL_VALUE = {
  counter:0,
  privacy:false,
}

const counterReducer = (store=INITIAL_VALUE,action)=>{
  if(action.type === 'INCREMENT'){
    return {...store,counter:store.counter + 1}; // yhaa hmm direct apne store ko hi change krr rhe hai blki  aisa nhi
  }                                    //nhi krna hota kyunki redux kaa store bhi immutable hota hai usse
  else if(action.type === 'DECREMENT'){         //direct change nhi krenge but kaam chlaa skte hai
    return {...store,counter:store.counter - 1};
  }
  else if(action.type === 'ADD'){        
    return {...store,counter:store.counter + Number(action.payload.num)};
  }
  else if(action.type === 'SUBTRACT'){        
    return {...store,counter:store.counter - Number(action.payload.num)};
  }
  else if(action.type === 'PRIVACY_TOGGLE'){        
    return {...store,privacy:!store.privacy};
// return {...counter:store.counter,privacy:!store.privacy};  aise bhi krr skte the mtlb hmm kya krr rhethe ki hmm jbb change krr rhe the toh uss store ke baaki values ko nhi store krr rhe the unhe bhi uske saath return krna tha kyunki hmm ek value change krr rhe hai toh usse btana pdega store ke baaki elements ki previous velu taaki voh affect naa ho aur iss treeke mein ek dikkt yeah thi ki agrr bhut saare elements hote toh hmme sbb ko likhna pdta toh avoid krne ke liye hmne sbb se pehle pure store ki previous value le li aur uske baad apne changes ko update krr rhe hai

  }
  return store;
}

const counterStore = createStore(counterReducer);

export default counterStore; ///abb isse hrr jgh use krr skte hai