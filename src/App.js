import React , { Component } from 'react';
import Cell from './components/Cell'
import Table from './components/Table'
import TableRow from './components/TableRow'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      rowsNum: 0,
      cellsNum: 0,
      color: "#ffffff",
      mouseDown: false
    });
    this.renderTable = this.renderTable.bind(this);
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.removeCol = this.removeCol.bind(this)
    this.colorOnMouseEnter = this.colorOnMouseEnter.bind(this);
    this.changeColorState = this.changeColorState.bind(this);
    this.fillUncolored = this.fillUncolored.bind(this)
    this.fillAll = this.fillAll.bind(this)
    this.mouseDrag = this.mouseDrag.bind(this);
  }

  renderTable() {
    let tableInfo = [];
    for(let i = 0; i < this.state.rowsNum; i++) {
      let newRow = [];
      for(let k = 0; k < this.state.cellsNum; k++) {
        newRow.push(
          //add onclick here for each cell to change color on a click. 
          <Cell 
            key={1000+k} 
            onMouseEnter={this.colorOnMouseEnter} 
          />
        );
      }
      tableInfo.push(
        <TableRow 
          key={i} 
          info={newRow}
        />
      );
    }
    return tableInfo;
  }
  
  addRow(){
    if (this.state.cellsNum > 0) {
      this.setState({rowsNum: this.state.rowsNum + 1});
    }
    if (this.state.rowsNum === 0 || this.state.cellsNum === 0) {
      this.setState({rowsNum:1, cellsNum:1})
    }
  }

  removeRow(){
    if (this.state.rowsNum > 0) {
      this.setState({rowsNum: this.state.rowsNum - 1});
    }
  }

  addCol(){
    if (this.state.rowsNum > 0) {
      this.setState({cellsNum: this.state.cellsNum + 1});
    }
    if (this.state.rowsNum === 0 || this.state.cellsNum === 0) {
      this.setState({rowsNum:1, cellsNum:1})
    }
  }

  removeCol(){
    if (this.state.cellsNum > 0) {
      this.setState({cellsNum: this.state.cellsNum - 1})
    }
  }

  colorOnMouseEnter(e){
    e.preventDefault()
    if (this.state.mouseDown) {
      e.target.style.backgroundColor = this.state.color
    };
  }

  mouseDrag(e) {
    if (e.type === 'mousedown') {
      if (e.target.className === 'cell') {
        e.target.style.backgroundColor = this.state.color;
      }
      if (!this.state.mouseDown) {
        this.setState({mouseDown: true});
      }
    } else {
      this.setState({mouseDown: false});
    }
  }

  changeColorState(){
    this.setState({color: document.querySelector(".color-selector").value});
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

      <div className="App" onMouseDown={this.mouseDrag} onMouseUp={this.mouseDrag}>
        <h1 className='title'>Create and Color Your Own Grid</h1>
        <div className='controls'>
          <button onClick={this.addRow}>Add Row</button>
          <button onClick={this.removeRow}>Remove Row</button>
          <button onClick={this.addCol}>Add Column</button>
          <button onClick={this.removeCol}>Remove Column</button>
          <div className='color-select'>
            <h5>Select Colour:</h5>
            <input type="color" onChange={this.changeColorState} className='color-selector' value={this.state.color}/>
          </div>
          <button onClick={this.fillUncolored}>Fill Uncolored</button>
          <button onClick={this.fillAll}>Fill All</button>
          <button onClick={this.clearAll}>Clear All</button>
        </div>
        <Table 
          populate={this.renderTable()}   
        />
      </div>
    )
  }
}

export default App;
