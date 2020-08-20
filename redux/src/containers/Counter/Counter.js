import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incCounter} />
                <CounterControl label="Decrement" clicked={this.props.decCounter} />
                <CounterControl label="Add 5" clicked={this.props.addCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.substractCounter} />
                <hr />
                <button onClick={this.props.storeResult}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map((result) => {
                            return (
                                <li key={result.id} onClick={this.props.deleteResult}>{result.value}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        storedResults: state.results,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incCounter: () => dispatch({ type: 'INCREMENT' }),
        decCounter: () => dispatch({ type: 'DECREMENT' }),
        addCounter: () => dispatch({ type: 'ADD', payload: { value: 5 } }),
        substractCounter: () => dispatch({ type: 'SUBSTRACT', payload: { value: 5 } }),
        storeResult: () => dispatch({ type: 'STORE_RESULT' }),
        deleteResult: () => dispatch({ type: 'DELETE_RESULT' }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);