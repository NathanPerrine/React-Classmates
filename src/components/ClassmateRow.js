import React, { Component } from 'react'

export default class ClassmateRow extends Component {
  render() {
      const classmate = this.props.classmate
    return (
        <tr>
            <td>{classmate.id}</td>
            <td>{classmate.first_name}</td>
            <td>{classmate.last_name}</td>
        </tr>
    )
  }
}
