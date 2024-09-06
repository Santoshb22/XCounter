import React, { useState } from 'react'

const XCounter = () => {

    const [count, setCount] = useState(0);


    function handleIncrement() {
        setCount(prev => prev + 1)
    }
    function hanldeDecrement() {
        setCount(prev => prev - 1);
    }
  return (
    <div className='counter-app'>
        <h1>Counter App</h1>

        <div className="count">
            <p>Count: {count}</p>

            <div className="counter-button">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={hanldeDecrement}>Decrement</button>
            </div>
        </div>


    </div>
  )
}

export default XCounter