import React from "react";


class TableRow extends React.Component {
    render() {
        return (
            <tr>{this.props.info}</tr>
        )
    }
}

export default TableRow;