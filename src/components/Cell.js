import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color : 'white'}
    }
    render() {
        return (
            <div className="cell" style={`color: ${this.state.color}`}></div>
        )
    }
}

export default Cell;