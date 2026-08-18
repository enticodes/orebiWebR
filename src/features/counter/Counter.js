import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice'


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
    
      </div>
    </div>
  )
}