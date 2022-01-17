import React from "react";

class Cell extends React.Component {
    render() {
        return (
            <td className="cell" onMouseEnter={this.props.onMouseEnter} ></td>
        )
    }
}

export default Cell;