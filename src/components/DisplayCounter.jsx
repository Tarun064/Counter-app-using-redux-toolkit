import { useSelector } from "react-redux";

function DisplayCounter(){
  const counter = useSelector(store=>store.counter); //isse yeah apna subscription vgrh wala kaam khud internally krr lega jo hmne pehle m=node ke time kiya tha
  return <p className="lead mb-4">Current Counter Value : <span className="value">{counter}</span></p>
}

export default DisplayCounter;