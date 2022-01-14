import React from "react";
import Cell from "./Cell";

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells : [<Cell key={this.props.columns}/>]
        }
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.columns)
        // console.log("hi")
        // if (this.props.columns < prevProps.columns) {
        //     this.setState(prevState => ({
        //         cells: prevState.cells.slice(0, prevState.cells.length-1)
        //     }));
        // } else if (this.props.columns > prevProps.columns) {
        //     console.log("adding cell!", this.state.cells);
        //     this.setState(prevState => ({
        //         cells: [...prevState.cells, <Cell key={this.props.columns}/>]
        //     }));
        // } else {
        //     console.log("idk what I'm doing")
        // }
    }

    render() {
        const cells = this.state.cells;
        console.log(cells, this.props.columns)
        return (
            <div className="row" key={this.props.columns}>
                {cells}
            </div>
        )
    }
}
export default TableRow;