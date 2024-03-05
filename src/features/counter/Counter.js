import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment} from './counterSlice';

export default function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch ();
    const [incrementAmount, setIncrementAmount] = useState();

    const handleChange = (e) => {
      setIncrementAmount(Number(e.target.value));
    };

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
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}