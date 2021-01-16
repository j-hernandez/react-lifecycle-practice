import React, { useState } from 'react';


export default (props) => {

    // this._increment will no longer work 
    // now that we're in a functional component
    // so we'll redeclare this as a constant and
    // invoke or reference directly

    console.log('render()');
    const [count, setCount] = useState(238923923902390);

    // const arrayOfStateManagementStuff = useState(0);
    // console.log(arrayOfStateManagementStuff);
    // const count = arrayOfStateManagementStuff[0];
    // const setCount = arrayOfStateManagementStuff[1];


    // useState will create an array
    // the first item will include a variable called count which will be set to 0
    // second item will be a function that can be used to modify the count


    const _increment = () => setCount(function() {
        return count + 1;
    });
    
    return (
        <>
            <h1>Lifecycle - Functional Component Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );

}

