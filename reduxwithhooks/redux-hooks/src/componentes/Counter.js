import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../actions/counter'

const Counter = ({counter, decrement, increment}) => (
  <>
      <h1>Counter: {counter} </h1>
      <ul>
        <li><button onClick={increment}> + </button></li>
        <li><button onClick={decrement}> - </button></li>
      </ul>
  </>
)
const mapStateToProps = state => ({
  counter: state.counterReducers.counter
})

const mapDispatchToProps = dispacth =>({
  decrement: () => dispacth(actions.decrement()),
  increment: () => dispacth(actions.increment())
})
export default connect(mapStateToProps,mapDispatchToProps)(Counter)