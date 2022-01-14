import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns : 1,
            rows : []
        }
        this.addColumn = this.addColumn.bind(this);
        this.removeColumn = this.removeColumn.bind(this);
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
                    <TableRow key={this.props.rows + this.state.columns} columns={this.state.columns} />
                ]
            }));
        }
    }

    addColumn() {
        this.setState(prevState => ({
          columns: prevState.columns + 1
        }))
    }
      
    removeColumn() {
        if (this.state.columns > 0) {
            this.setState(prevState => ({
                columns: prevState.columns - 1
            }))
        }
    }

    render() {
        return (
            <>
                <button onClick={this.addColumn}>Add Column</button>
                <button onClick={this.removeColumn}>Remove Column</button>
                <div className="grid" key={-1}>
                    {this.state.rows}
                </div>
            </>
        )
    }
}
export default Table;