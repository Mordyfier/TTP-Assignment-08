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
      cellsNum: 1,
      color: "",
      mouseDown: false
    });
    this.renderTable = this.renderTable.bind(this);
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.colorOnMouseEnter = this.colorOnMouseEnter.bind(this);
    this.changeColorState = this.changeColorState.bind(this);
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
            onMouseDown={this.mouseDrag} 
            onMouseUp={this.mouseDrag} 
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
    this.setState({rowsNum: this.state.rowsNum + 1});
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
  }

  colorOnMouseEnter(e){
    e.preventDefault()
    if (this.state.mouseDown) {
      e.target.style.backgroundColor = this.state.color
    };
  }

  mouseDrag(e) {
    if (e.type === 'mousedown') {
      e.target.style.backgroundColor = this.state.color;
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

  render(){
    return (
      <div className="App">
        <div className='controls'>
          <button onClick={this.addRow}>Add Row</button>
          <button onClick={this.removeRow}>Remove Row</button>
          <button onClick={this.addCol}>Add Column</button>
          <div className='color-select'>
            <h5>Select Colour:</h5>
            <input type="color" onChange={this.changeColorState} className='color-selector'/>
          </div>
        </div>
        <Table populate={this.renderTable()} />
      </div>
    )
  }
}

export default App;
