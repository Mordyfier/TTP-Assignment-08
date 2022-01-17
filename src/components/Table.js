import React from "react";


class Table extends React.Component {
    render() {
        return (
            <div className="grid">
                <table>
                    <tbody>
                        {this.props.populate}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;