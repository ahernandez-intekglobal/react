import { Component } from "react";
import { Counter } from "./Counter";
import { ErrorBoundary } from "./ErrorBoundary";

export class CounterApp extends Component {
    render() {
        return (
        <ErrorBoundary>
            <Counter />
        </ErrorBoundary>
        )
    }
}
