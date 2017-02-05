/* jshint esversion: 6 */
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class TruckApp extends Component {
  constructor(props) {
    super(props);
    this.rows = [{"id":1,"first_name":"William","last_name":"Elliott","email":"welliott0@wisc.edu",
           "country":"Argentina","ip_address":"247.180.226.89"},
            {"id":2,"first_name":"Carl","last_name":"Ross","email":"cross1@mlb.com",
           "country":"South Africa","ip_address":"27.146.70.36"},
            {"id":3,"first_name":"Jeremy","last_name":"Scott","email":"jscott2@cbsnews.com",
           "country":"Colombia","ip_address":"103.52.74.225"}];
    this.state = {
      filteredDataList: this.rows,
      sortBy: 'id',
      sortDir: null
    };
  }

  getAppointments() {
    fetch('/api/v1/appointments.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let appointments = body;
      this.setState({ rows: appointments });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
    if (sortBy === this.state.sortBy) {
      sortDir = this.state.sortDir === 'ASC' ? 'DESC' : 'ASC';
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

      if (sortDir === 'DESC') {
        sortVal = sortVal * -1;
      }
      return sortVal;
    });

    this.setState({sortBy, sortDir, filteredDataList : rows});
  }

  render() {
    debugger;
    let sortDirArrow = '';
    if (this.state.sortDir !== null){
      sortDirArrow = this.state.sortDir === 'DESC' ? ' ↓' : ' ↑';
    }
    return <Table
        height={40+((this.state.filteredDataList.length+1) * 30)}
        width={770}
        rowsCount={this.state.filteredDataList.length}
        rowHeight={30}
        headerHeight={60}
        rowGetter={function(rowIndex) {return this.state.filteredDataList[rowIndex]; }.bind(this)}>
        <Column dataKey="id" width={50}
          label={'id' + (this.state.sortBy === 'id' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column dataKey="first_name" width={180}
          label={'Truck' + (this.state.sortBy === 'first_name' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="last_name" width={180}
          label={'Location' + (this.state.sortBy === 'last_name' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="email" width={180}
          label={'Day' + (this.state.sortBy === 'email' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
        <Column  dataKey="country" width={180}
          label={'Time' + (this.state.sortBy === 'country' ? sortDirArrow : '')}
          headerRenderer={this._renderHeader.bind(this)} />
      </Table>;
  }
}

export default TruckApp;
