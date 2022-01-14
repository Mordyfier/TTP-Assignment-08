import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows : []
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.rows < prevProps.rows) {
            this.setState(prevState => ({
                rows: prevState.rows.slice(0, prevState.rows.length-1)
            }));
        } else if (this.props.rows > prevProps.rows) {
            this.setState(prevState => ({
                rows: [
                ...prevState.rows, 
                <TableRow key={this.props.rows} columns={this.props.columns} />
                ]
            }));
            console.log(this.state.rows)
        }
    }
    render() {
        return (
            <div className="grid">
                {this.state.rows}
            </div>
        )
    }
}
export default Table;