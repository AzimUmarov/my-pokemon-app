import React from "react";

export default class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return <h1 className="alert alert-warning text-center m-5 p-5">Sorry :) Something went wrong. Please reload the page</h1>;
        }

        return this.props.children;
    }
}