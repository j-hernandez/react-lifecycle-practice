import React, { useState, useEffect } from 'react';


export default (props) => {

    // this._increment will no longer work 
    // now that we're in a functional component
    // so we'll redeclare this as a constant and
    // invoke or reference directly

    console.log('render()');
    const [count, setCount] = useState(0);

    // const arrayOfStateManagementStuff = useState(0);
    // console.log(arrayOfStateManagementStuff);
    // const count = arrayOfStateManagementStuff[0];
    // const setCount = arrayOfStateManagementStuff[1];


    // useState will create an array
    // the first item will include a variable called count which will be set to 0
    // second item will be a function that can be used to modify the count


                                     // implicit return
    const _increment = () => setCount(count + 1);

    // Lifecycle method replication here

    // // componentDidUpdate()
    // useEffect(() => {
    //     console.log('Runs after every update');
    // })

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
            // disconnect from network connections
            // cancel any running timeouts
            // remove any event listeners
        }
    }, [])
    
    return (
        <>
            <h1>Lifecycle - Functional Component Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );

}

