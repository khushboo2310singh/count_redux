import React from 'react'
import {inc, dec, incByVal} from "./demoSlice"
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
  const count=useSelector(state=>state.demo.count);
  const dispatch=useDispatch();
  return (
    <>
    <div>
      <h2>count is {count}</h2>
      <input type="button" value="Increment" onClick={()=>dispatch(inc())} />
      <input type="button" value="Decrement" onClick={()=>dispatch(dec())} />
      <input type="button" value="IncByValue" onClick={()=>dispatch(incByVal(10))} />
    </div>
    </>
  )
}

export default App