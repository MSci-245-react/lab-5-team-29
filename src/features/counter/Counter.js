import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export default function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch ()
    
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatcch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatcch(decrement())}
                >
                    Dncrement
                </button>
            </div>
        </div>
    )
}