/* jshint esversion: 6 */
import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class TruckApp extends Component {
  constructor(props) {
    super(props);
    this.rows = [];
    this.state = {
      filteredDataList: this.rows,
      search: "",
      searchBy: null,
      sortBy: null,
      sortDir: "ASC"
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
      _.setState({
        filteredDataList: body
      });
      _.rows = body;
    });
    return _;
  }

  componentDidMount() {
    this.getAppointments();
  }

  renderHeader(label, cellDataKey) {
    return (
      <div>
        <a onClick={this.sortRowsBy.bind(this, cellDataKey)}>{label}</a>
        <div>
          <input
            id={cellDataKey}
            onChange={this.onFilterChange.bind(this, cellDataKey)}
            onClick={this.onFilterClick.bind(this, cellDataKey)}
            style={{ width: "90%" }}
          />
        </div>
      </div>
    );
  }


  onFilterClick(cellDataKey, event) {
    if (!event.target.value) {
      this.setState({
        filteredDataList: this.rows,
        search: ""
      });
      let filterBy = cellDataKey;
      this.setState({ filterBy });
      let headings = ["truck", "location", "day", "time"].filter(
        heading => heading !== filterBy
      );
      headings.forEach(heading => {
        let inputElement = document.getElementById(heading);
        inputElement.value = ""
      });
    }
  }

  onFilterChange(cellDataKey, event) {
    let search = event.target.value.toString().toLowerCase();
    let filteredDataList = this.rows.filter(row => {
      let value = row[cellDataKey].toString().toLowerCase();
      return value.indexOf(search) !== -1;
    });
    this.setState({
      filteredDataList,
      search
    });
  }

  sortRowsBy(cellDataKey) {
    let sortDir = this.state.sortDir;
    let sortBy = cellDataKey;
    if (sortBy == this.state.sortBy) {
      sortDir = this.state.sortDir == 'ASC' ? 'DESC' : 'ASC';
    } else {
      sortDir = 'DESC';
    }    
    const sorter = rows => rows.sort((a, b) => {
      let sortVal = 0;
      if (a[sortBy] > b[sortBy]) {
        sortVal = 1;
      }
      if (a[sortBy] < b[sortBy]) {
        sortVal = -1;
      }
      if (sortDir == "DESC") {
        sortVal = sortVal * -1;
      }
      return sortVal;
    })
    let filteredDataList = sorter(this.state.filteredDataList);

    this.setState({ filteredDataList, sortBy, sortDir });
  }

  render() {
    let sortDirArrow = '';
    if (this.state.sortDir !== null){
      sortDirArrow = this.state.sortDir == 'DESC' ? ' ↓' : ' ↑';
    }
    return (
      <Table
        height={500}
        width={960}
        rowsCount={this.state.filteredDataList.length}
        rowHeight={30}
        headerHeight={60}
        rowGetter={function(rowIndex) {
          return this.state.filteredDataList[rowIndex];
        }.bind(this)}
      >
        <Column
          dataKey="truck"
          width={240}
          label={"Truck" + (this.state.sortBy == "truck" ? sortDirArrow : "")}
          headerRenderer={this.renderHeader.bind(this)}
        />
        <Column
          dataKey="location"
          width={480}
          label={
            "Location" + (this.state.sortBy == "location" ? sortDirArrow : "")
          }
          headerRenderer={this.renderHeader.bind(this)}
        />
        <Column
          dataKey="day"
          width={120}
          label={"Day" + (this.state.sortBy == "day" ? sortDirArrow : "")}
          headerRenderer={this.renderHeader.bind(this)}
        />
        <Column
          dataKey="time"
          width={120}
          label={"Time" + (this.state.sortBy == "time" ? sortDirArrow : "")}
          headerRenderer={this.renderHeader.bind(this)}
        />
        {/* <Column
          dataKey="link"
          width={120}
          label={"link" + (this.state.sortBy == "link" ? sortDirArrow : "")}
          headerRenderer={this.renderHeader.bind(this)}
        /> */}
      </Table>
    );
  }
}

export default TruckApp;
