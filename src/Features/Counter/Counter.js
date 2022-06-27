import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {increament , decrement} from './couunterSlice'

function Counter() {
    const count = useSelector(state => state.Counter.count)
    const dispatch = useDispatch()
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=> dispatch(increament())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>

        </div>
    </section>
  )
}

export default Counter