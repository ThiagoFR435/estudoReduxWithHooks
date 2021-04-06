import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../actions/counter'
import { selectors } from '../selectors/counter'

const Counter = () => {
  const counter = useSelector(selectors.getCounter)
  const dispatch = useDispatch()
  
  const handleDecrement = () => dispatch(actions.decrement())
  const handleIncrement = () => dispatch(actions.increment())

  return (
    <>
        <h1>Contador: {counter} </h1>
        <ul>
          <li><button onClick={handleIncrement}> + </button></li>
          <li><button onClick={handleDecrement}> - </button></li>
        </ul>
    </>
  )
}

export default Counter