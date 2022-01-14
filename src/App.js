import React from 'react';
import Table from './components/Table'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows : 1
    }
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
  }
  
  addRow() {
    this.setState(prevState => ({
      rows: prevState.rows + 1
    }))
  }
  removeRow() {
    if (this.state.rows > 0) {
      this.setState(prevState => ({
          rows: prevState.rows - 1
      }))
    }
  }


  render() {
      return (
        <>
          <button onClick={this.addRow}>Add Row</button>
          <button onClick={this.removeRow}>Remove Row</button>
          <Table rows={this.state.rows} />
        </>
      );
  }

}

export default App;
