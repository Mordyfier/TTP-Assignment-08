import React from "react";

class Cell extends React.Component {
    render() {
        return (
            <td onClick={this.props.onClick} onMouseEnter={this.props.onMouseEnter} className="cell"></td>
        )
    }
}

export default Cell;