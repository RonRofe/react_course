import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

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
                                <li key={result.id} onClick={() => this.props.deleteResult(result.id)}>{result.value}</li>
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
        incCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        decCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        addCounter: () => dispatch({ type: actionTypes.ADD, payload: { value: 5 } }),
        substractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, payload: { value: 5 } }),
        storeResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        deleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, payload: { id } }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);