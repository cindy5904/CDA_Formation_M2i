import React from 'react';
import { useState } from 'react';

const FixBuzz = () => {
    let [count, setCount] = useState(1);

    const condition = (count) => {
        if (count % 3 === 0 && count % 5 === 0) {
            return 'FizzBuzz';
        } else if (count % 3 === 0) {
            return 'Fizz';
        } else if (count % 5 === 0) {
            return 'buzz';
        } else {
            return count;
        }
    }
    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }
    return ( 
        <div>
            <h1>FizzBuzz</h1>
            <p>{condition(count)}</p>
            <p>{count}</p>
            <button onClick={Increment} disabled= {count >=40}>Incrément</button>
            <button onClick={Decrement} disabled= {count <=0}>Décrément</button>
        </div>
     );
}
 
export default FixBuzz;