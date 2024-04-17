import {Component} from "react";

class NegativeError extends Error{
    constructor(msg){
        super(msg);
        this.name = "NegativeError";
    }
}

export class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        const newValue = this.state.count+1;

        this.setState({count:newValue});
    }
    decrement(){
        const newValue = this.state.count-1;
        if(this.isNegative(newValue)){
            throw new NegativeError("Negative value reached");
        }
        this.setState({count: newValue});
    }
    isNegative(num){
        return num<0;
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button
                    onClick={this.increment}
                >
                    Increment
                </button>
                <button
                    onClick={this.decrement}
                >
                    Decrement
                </button>
                <div className="square" />
            </div>
        );
    }
}
