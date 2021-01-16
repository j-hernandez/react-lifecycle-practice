import React, {useState, useEffect} from 'react';

const DecrementButton = ({clickHandler})=> {
    return ( 
        <>
        <button onClick={clickHandler}>Decrement</button>
        </>
    
    );
}

export default DecrementButton;