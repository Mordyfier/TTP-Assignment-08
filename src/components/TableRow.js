import React from "react";
import Cell from "./Cell";

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells : []
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.columns < prevProps.columns) {
            console.log("hi");
            this.setState(prevState => ({
                cells: prevState.cells.slice(0, prevState.cells.length-1)
            }));
        } else if (this.props.columns > prevProps.columns) {
            console.log("adding cell!", this.state.cells);
            this.setState(prevState => ({
                cells: [...prevState.cells, <Cell key={this.props.columns}/>]
            }));
        } else {
            console.log("idk what I'm doing")
        }
    }

    render() {
        return (
            <div className="row">
                {this.state.cells}
            </div>
        )
    }
}
export default TableRow;