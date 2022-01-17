import React from "react";

class Cell extends React.Component {
    render() {
        return (
            <td onClick={this.props.onClick} className="cell"></td>
        )
    }
}

export default Cell;