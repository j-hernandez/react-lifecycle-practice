import React from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor()');

        this.state = {
            count: 0
        }

        // When this is invoked, your component is not
        // yet available in the DOM, meaning anything
        // looking to pass data or otherwise to this
        // component, will fail.
    }

    componentDidMount() {
        // If you need to fetch data for your component from outside your
        // app, you can use this method
        console.log('componentDidMount()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    componentDidUpdate(previousProps, previousState, snapshot) {
        console.log('componentDidUpdate()');
    }

    _increment = () => {
        console.log('_increment()');
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('this.setState() finished')
        })
    }
    
    render() {
        console.log('render()');
        return (
                <>
                <h1>Lifecycle Demo {this.state.count}</h1>
                <button onClick={this._increment}>+</button>
                <h2>App count: {this.props.appCount} </h2>
                </>
        );
    }

}

export default Lifecycle
