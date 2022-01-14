import React from "react";

class Cell extends React.Component {
    constructor() {
        super();
        this.state = {color : 'white'}
    }
    render() {
        return (
            <div className="cell" ></div>
        )
    }
}

export default Cell;