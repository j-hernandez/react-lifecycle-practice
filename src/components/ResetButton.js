import React, {useState, useEffect} from 'react';


const ResetButton = (props)=> {
    return ( 
        <>
        <button onClick={props.clickHandler}>Reset</button>
        </>
    
    );
}

export default ResetButton;