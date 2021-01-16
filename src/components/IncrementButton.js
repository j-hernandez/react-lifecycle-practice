// Requirements
// - Class based React component
// - Accepts a clickHandler prop
// - Invokes clickHandler when a <button></button> is pressed

import React, { Component }from 'react'; // React and React.Component

class IncrementButton extends Component {
    //const handleClick = props.handleclick;

    // From React.Component
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
            <button onClick={this.props.clickHandler}>Increment</button>
            </>
        )
    }
}

export default IncrementButton;