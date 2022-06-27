import React from 'react'
import {generate , generate100} from './RandomSlice'
import {useSelector , useDispatch} from 'react-redux'

function Random() {
    const number = useSelector((state => state.Random.number))
    const dispatch = useDispatch()
  return (
    <main>
        <p>{number}</p>
        <button onClick={()=> dispatch(generate())}>Generate</button>
        <button onClick={()=> dispatch(generate100())}>Generate 100</button>
    </main>
  )
}

export default Random