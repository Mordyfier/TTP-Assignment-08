import React from 'react';
import Table from './components/Table'
import './App.css';
import { Component } from 'react';
import Cell from './src/Cell'
import Table from './src/Table'
import TableRow from './src/TableRow'
class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      rowsNum: 1,
      cellsNum: 1,
      color: ""
    })
    this.renderTable = this.renderTable.bind(this)
    this.addRow = this.addRow.bind(this)
    this.addCol = this.addCol.bind(this)
    this.colorOnClick = this.colorOnClick.bind(this)
    this.changeColorState = this.changeColorState.bind(this)
  }

  renderTable(){
    let tableInfo = []
    for(let i=0; i<this.state.rowsNum; i++){
      let newRow = []
      for(let k=0; k<this.state.cellsNum; k++){
        newRow.push(
          //add onclick here for each cell to change color on a click. 
          <Cell onClick={this.colorOnClick}/>
        )
     
      }
      tableInfo.push(
        <TableRow info={newRow}/>
      )
    }
    return tableInfo

  }
  
  addRow(){
    this.setState({rowsNum: this.state.rowsNum + 1})
  }

  addCol(){
    this.setState({cellsNum: this.state.cellsNum + 1})
  }
  
  colorOnClick(e){
    e.preventDefault()
    e.target.style.backgroundColor = this.state.color
  }

  changeColorState(){
    this.setState({color: document.querySelector(".color-select").value})
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.addRow}>ADD ROW</button>
        <button onClick={this.addCol}>ADD COLUMN</button>
        <br></br>
        <input type="color" onChange={this.changeColorState} className='color-select'/>
        <Table populate={this.renderTable()}/>
      </div>
    )
  }
 
}

export default App;
