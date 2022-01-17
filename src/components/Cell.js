import React, {useState} from "react";

class Cell extends React.Component {
    render() {
        return (
            <td className="cell" onMouseEnter={this.props.onMouseEnter} onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp} ></td>
        )
    }
}

export default Cell;