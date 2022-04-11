import React, { Component } from 'react'
import ClassmateRow from '../components/ClassmateRow'

export default class ClassTable extends Component {
    render() {
        return (
            <>
                <h1 className="text-center mt-5" >Kekambas Classmates</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.classmates.map((classmate, idx) => <ClassmateRow classmate={classmate} key={idx} />)}
                    </tbody>
                </table>
            </>
        )
    }
}
