import React from "react";


class Table extends React.Component {
    render() {
        return (
            <div className="grid" onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}>
                <table cellSpacing={0}>
                    <tbody>
                        {this.props.populate}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;