import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }
  renderEmployees() {
    const employees = this.props.employeeList;
  
  }
  render() {
    return (
      <View>
        {this.renderEmployees()}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    employees: state.employees
  };
};
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
