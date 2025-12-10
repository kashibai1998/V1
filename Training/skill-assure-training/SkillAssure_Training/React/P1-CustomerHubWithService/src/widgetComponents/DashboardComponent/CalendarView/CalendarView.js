import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react';
import { Calendar, Select, Radio, Col, Row, Typography } from 'antd';
 import './CalendarView.scss';

class CalanderView extends React.Component {

  state = {

  }

  onSelect = (data) => {
    console.log(data)
  }

  onPanelChange = (value) => {
    this.setState({
      value: value
    })
  }

  getListData = (value) => {
    // let listData;
    // switch (value.date()) {
    // case 8:

    // break;
    // case 10:

    // break;
    // case 15:

    // break;
    // default:
    // }
    // return listData || [];
  }

  dateFullCellRender = (value) => {
    // console.log(value)
    // for (let i = 0; i < value.data().length; i++) {
    // if (value.date() == 5) {
    // return <div style={{ backgroundColor: 'green' }}>1</div>
    // } else {

    // }

    // }

  }

  // dateCellRender = (value) => {
  // if (value.date() == 5) {
  // return <div style={{ backgroundColor: 'green' }}>.</div>
  // }
  // }

   convert=(str)=>{
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  onFullRender = (value) => {

    const day = value.date();
    console.log(value._d)
    let style;
    if (this.props.days.includes(this.convert(value._d))) {
      style = { backgroundColor: "lightblue" };
    }
    else {
      style = {};
    }
    return <div style={style}>{day}</div>;
  }

  render() {

    return (
      
      
        //  <div> 
          <Calendar className = "calend"
             // style={{ height:'100px',marginTop:'-35px !important' }}
            fullscreen={false}
            onSelect={this.onSelect}
            onPanelChange={this.onPanelChange}
            dateFullCellRender={this.onFullRender}
          // dateFullCellRender={this.dateFullCellRender}
          // dateCellRender={this.dateCellRender}
          // headerRender={({ value, type, onChange, onTypeChange }) => {
          // const start = 0;
          // const end = 12;
          // const monthOptions = [];

          // const current = value.clone();
          // const localeData = value.localeData();
          // const months = [];
          // for (let i = 0; i < 12; i++) {
          // current.month(i);
          // months.push(localeData.monthsShort(current));
          // }

          // for (let index = start; index < end; index++) {
          // monthOptions.push(
          // <Select.Option className="month-item" key={`${index}`}>
          // {months[index]}
          // </Select.Option>,
          // );
          // }
          // const month = value.month();

          // const year = value.year();
          // const options = [];
          // for (let i = year - 10; i < year + 10; i += 1) {
          // options.push(
          // <Select.Option key={i} value={i} className="year-item">
          // {i}
          // </Select.Option>,
          // );
          // }

          // }}

          />
       
    //  </div>
    )
  }
}

export default CalanderView;