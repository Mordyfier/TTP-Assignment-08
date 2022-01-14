import React from 'react';
import Table from './components/Table'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows : 0,
      columns: 0
    }
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.removeColumn = this.removeColumn.bind(this);
  }
  
  addRow() {
    this.setState(prevState => ({
      rows: prevState.rows + 1
    }))
    console.log(this.state.rows);
  }
  removeRow() {
    if (this.state.rows > 0) {
      this.setState(prevState => ({
          rows: prevState.rows - 1
      }))
    }
    console.log(this.state.rows);
  }
  addColumn() {
    this.setState(prevState => ({
      columns: prevState.columns + 1
    }))
    console.log(this.state.columns);
  }
  
  removeColumn() {
    if (this.state.columns > 0) {
      this.setState(prevState => ({
        columns: prevState.columns - 1
      }))
    }
    console.log(this.state.columns);
  }

  render() {
      return (
        <>
          <button onClick={this.addRow}>Add Row</button>
          <button onClick={this.removeRow}>Remove Row</button>
          <button onClick={this.addColumn}>Add Column</button>
          <button onClick={this.removeColumn}>Remove Column</button>
          <Table key={this.state.rows * this.state.columns} columns={this.state.columns} rows={this.state.rows} />
        </>
      );
  }

}

export default App;
