import React from 'react';
import './App.css';
import { Component } from 'react';
import Cell from './components/Cell'
import Table from './components/Table'
import TableRow from './components/TableRow'

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      rowsNum: 1,
      cellsNum: 1,
      color: "#ff0000",
      table : []
    })
    this.renderTable = this.renderTable.bind(this)
    this.addRow = this.addRow.bind(this)
    this.removeRow = this.removeRow.bind(this)
    this.addCol = this.addCol.bind(this)
    this.removeCol = this.removeCol.bind(this)
    this.colorOnClick = this.colorOnClick.bind(this)
    this.changeColorState = this.changeColorState.bind(this)
    this.fillUncolored = this.fillUncolored.bind(this)
    this.fillAll = this.fillAll.bind(this)
    this.clearAll = this.clearAll.bind(this)
  }

  renderTable(){
    let tableInfo = []
    for(let i=0; i<this.state.rowsNum; i++){
      let newRow = []
      for(let k=0; k<this.state.cellsNum; k++){
        newRow.push(
          //add onclick here for each cell to change color on a click. 
          <Cell onClick={this.colorOnClick} key = {`${i}${k}`}/>
        )
     
      }
      tableInfo.push(
        <TableRow info={newRow} key={i}/>
      )
    }
    
    return tableInfo

  }
  
  addRow(){
    this.setState({rowsNum: this.state.rowsNum + 1})
    
  }

  removeRow(){
    this.setState({rowsNum: this.state.rowsNum - 1})
  }

  addCol(){
    this.setState({cellsNum: this.state.cellsNum + 1})
  }

  removeCol(){
    this.setState({cellsNum: this.state.cellsNum - 1})
  }

  colorOnClick(e){
    e.preventDefault()
    e.target.style.backgroundColor = this.state.color
  }

  changeColorState(){
    this.setState({color: document.querySelector(".color-selector").value})
  }

  fillUncolored(){
    let arr = document.querySelectorAll(".cell")

    for(const element of arr){
      if(element.style.backgroundColor === ""){
        element.style.backgroundColor = this.state.color;
      } 
    }
  }

  fillAll() {
    let arr = document.querySelectorAll(".cell");

    arr.forEach(element => element.style.backgroundColor = this.state.color);
  }

  clearAll() {
    let arr = document.querySelectorAll(".cell");

    arr.forEach(element => element.style.backgroundColor = "");
  }

  render(){
    
    return (

      <div className="App">
        <div className='controls'>
          <button onClick={this.addRow}>ADD ROW</button>
          <button onClick={this.removeRow}>REMOVE ROW</button>
          <button onClick={this.addCol}>ADD COLUMN</button>
          <button onClick={this.removeCol}>REMOVE COLUMN</button>
          <button onClick={this.fillUncolored}>FILL UNCOLORED</button>
          <button onClick={this.fillAll}>FILL ALL</button>
          <button onClick={this.clearAll}>CLEAR ALL</button>
          <div className='color-select'>
            <h5>Select Color</h5>
            <input type="color" onChange={this.changeColorState} className='color-selector' value={this.state.color}/>
          </div>
        </div>
        <Table populate={this.renderTable()}/>
      </div>
    )
  }
 
}

export default App;
