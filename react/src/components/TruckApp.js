/* jshint esversion: 6 */
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class TruckApp extends Component {
  constructor(props) {
    super(props);
    this.rows = [];
    this.state = {
      filteredDataList: this.rows,
      sortBy: "truck",
      sortDir: null
    };
    this.getAppointments = this.getAppointments.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  getAppointments() {
    let _ = this;
    let appointments = [];
    fetch('/api/v1/appointments', {
     credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      appointments = body.appointments;
      _.setState({ filteredDataList: appointments });
      _.rows = appointments;
    });
    return _;
  }

  componentDidMount() {
    this.getAppointments();
  }

  _renderHeader(label, cellDataKey) {
    return <div>
            <a onClick={this._sortRowsBy.bind(this, cellDataKey)}>{label}</a>
             <div>
                <input style={{width:90+'%'}} onChange={this._onFilterChange.bind(this, cellDataKey)}/>
             </div>
          </div>;
  }

  _onFilterChange(cellDataKey, event) {
    if (!event.target.value) {
      this.setState({
        filteredDataList: this.rows,
      });
    }
    let filterBy = event.target.value.toString().toLowerCase();
    let size = this.rows.length;
    let filteredList = [];
    for (let index = 0; index < size; index++) {
      let v = this.rows[index][cellDataKey];
      if (v.toString().toLowerCase().indexOf(filterBy) !== -1) {
        filteredList.push(this.rows[index]);
      }
    }
    this.setState({
      filteredDataList: filteredList,
    });
  }

  _sortRowsBy(cellDataKey) {
    let sortDir = this.state.sortDir;
    let sortBy = cellDataKey;
    if (sortBy == this.state.sortBy) {
      sortDir = this.state.sortDir == 'ASC' ? 'DESC' : 'ASC';
    } else {
      sortDir = 'DESC';
    }
    let rows = this.state.filteredDataList.slice();
    rows.sort((a, b) => {
      let sortVal = 0;
      if (a[sortBy] > b[sortBy]) {
        sortVal = 1;
      }
      if (a[sortBy] < b[sortBy]) {
        sortVal = -1;
      }

      if (sortDir == 'DESC') {
        sortVal = sortVal * -1;
      }
      return sortVal;
    });

    this.setState({sortBy, sortDir, filteredDataList : rows});
  }

  render() {
    let sortDirArrow = '';
    if (this.state.sortDir !== null){
      sortDirArrow = this.state.sortDir == 'DESC' ? ' ↓' : ' ↑';
    }
    return <Table
        height={360}
        width={860}
        rowsCount={this.state.filteredDataList.length}
        rowHeight={30}
        headerHeight={60}
        rowGetter={function(rowIndex) {return this.state.filteredDataList[rowIndex]; }.bind(this)}>
        <Column dataKey="truck" width={240}
          label={'Truck' + (this.state.sortBy == 'truck' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="location" width={380}
          label={'Location' + (this.state.sortBy == 'location' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="day" width={120}
          label={'Day' + (this.state.sortBy == 'day' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="time" width={120}
          label={'Time' + (this.state.sortBy == 'time' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
      </Table>;
  }
}

export default TruckApp;
