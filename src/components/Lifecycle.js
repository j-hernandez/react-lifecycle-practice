import React from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor()');

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
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

    _increment = () => {
        console.log('_increment()');
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('this.setState() finished')
        })
    }
}

export default Lifecycle
