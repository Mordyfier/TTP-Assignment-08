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
        this.addCol = this.addCol.bind(this);
        this.removeCol = this.removeCol.bind(this)
        this.colorSet = this.colorSet.bind(this);
        this.setColorState = this.setColorState.bind(this)
        this.removeRow = this.removeRow.bind(this)
    }



    render(){
        return(
            <>
            <div id = "buttons">
            <input id="color-select" type="color" onChange={this.setColorState}/>
            <button onClick={this.addRow}> Add Row </button>
            <button onClick={this.addCol}> Add Column </button>
            <button onClick={this.removeRow}> Remove Row </button>
            <button onClick={this.removeCol}> Remove Column </button>
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
        this.setState({ rowsCount: this.state.rowsCount + 1 })
        
    }
    removeRow(){ 
        this.setState({ rowsCount: this.state.rowsCount -1 })
        
    }

    addCol(){
        this.setState({cellCount: this.state.cellCount + 1})
    }

    removeCol(){
        this.setState({cellCount: this.state.cellCount - 1})
    }
    colorSet(event){ 
        event.preventDefault();
        event.target.style.backgroundColor = this.state.color
    }
    
    setColorState(){
        this.setState({color: document.getElementById("color-select").value})
    
    }

}