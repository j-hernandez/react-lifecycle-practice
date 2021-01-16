import React, { useState, useEffect } from 'react';

import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import ResetButton from './ResetButton';

export default (props) => {
    console.log('render()');

    // Setting up state
    const [count, setCount] = useState(0);                   
    const _increment = () => setCount(count + 1);

    // Create a decrement helper method here
    const _decrement = () => setCount(count - 1);

    // Create a reset help method here
    const _reset = () => setCount(function() {
        return 0;
    });

    // componentDidUpdate() - with a variable watch
    useEffect(() => {
        return console.log(`componentDidUpdate() - count is now ${count}`)
    }, [count])

    // componentDidMount()
    useEffect(() => {
        console.log('componentDidMount() - This should only run once')
    }, []);

    // componentWillUnmount()
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount() - Runs when the Component is removed');
        }
    }, [])
    
    return (
        <>
            <h1>Lifecycle - Functional Component Demo {count}</h1>
            <IncrementButton clickHandler={_increment}>+</IncrementButton> 
            <DecrementButton clickHandler={_decrement}>-</DecrementButton>
            <ResetButton clickHandler={_reset}></ResetButton>
        </>

    );













































































































































































































































































}

