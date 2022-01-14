import React from 'react'
import TableRow from './TableRow.js'
import Cell from './Cell.js'
import { Component } from 'react'

export default class Table extends Component{
    constructor(props){
        super(props);
        this.state = ({
            rowsCount: 1,
            color: "",
            cellCount: 1
        })
        this.createTable = this.createTable.bind(this);
        this.addRow = this.addRow.bind(this);
        this.color = this.colorSet.bind(this);
    }



    render(){
        return(
            <>
            <div id = "buttons">
            <input id="color-select" type="color"/>
            <button onClick={this.addRow}> Add Row </button>
            </div>
            <table className="table">{this.createTable()}</table>
            </>
        );
    }

    createTable(){
        let table = []
        
        for(let i = 0; i < this.state.rowsCount; i++){
            let row = []
            for(let j = 0; j < this.state.cellCount; j++)
                
                row.push(<Cell 
                    onClick = {this.colorSet}
                />)
            table.push(<TableRow cells={row}/>)
        }
        return table;
    }

    addRow(){ 
        this.setState({ rowsCount: this.state.rowsCount+1 })
    }
   
    colorSet(event){ 
        event.preventDefault();
        event.target.style.backgroundColor = this.state.color
    }
}