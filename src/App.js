import logo from './logo.svg';
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
  }

  renderTable(){
    let tableInfo = []
    for(let i=0; i<this.state.rowsNum; i++){
      let newRow = []
      for(let k=0; k<this.state.cellsNum; k++){
        newRow.push(
          //add onclick here for each cell to change color on a click. 
          <Cell/>
        )
      tableInfo.push(
        <TableRow info={newRow}/>
      )
      }
    }
    return tableInfo

  }

  render(){
    return (
      <div className="App">
        <Table populate={this.renderTable()}/>
      </div>
    )
  }
 
}

export default App;
