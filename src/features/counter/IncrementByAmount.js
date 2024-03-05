import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incrementByAmount} from './counterSlice';

export default function IncrementByAmount(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch ();
    const [incrementAmount, setIncrementAmount] = useState();

    const handleChange = (e) => {
      setIncrementAmount(Number(e.target.value));
    };

    return (
            <div>
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={handleChange}
                    placeholder="Enter amount to increment"
                />
                <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Increment By Amount</button>
            </div>
 
    )
}