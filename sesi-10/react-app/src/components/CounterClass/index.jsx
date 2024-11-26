/* eslint-disable react/prop-types */
import React from "react";
import Counter from "../Counter";
import { connect } from "react-redux";
import { DECREMENT_ACTION, incrementAction } from "../../redux/actions/classActions";

class CounterClass extends React.Component {

    increment = (number) => {
        this.props.dispatch(incrementAction(number)) 
    }

    decrement = () => {
        this.props.dispatch(DECREMENT_ACTION)
    }
    
    render() {
        return <Counter
            count={this.props.counter}
            title={this.props.title}
            increment={this.increment}
            decrement={this.decrement}
        />;
    }
}



export default connect((state) => state.classCounter)(CounterClass)



// const connect = (cb) => {
//     const store = {dispatch: () => {}, state: {count: 1, title: 'connect HOF'}}
//     const state = cb(store.state)

//     return (component) => {
//         component.props = {
//             dispatch: store.dispatch,
//             ...state
//         }
//         return component
//     }
// }