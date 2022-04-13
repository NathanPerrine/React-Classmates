import React, { useState, useEffect } from 'react'
import ClassmateRow from '../components/ClassmateRow'

export default function ClassTable(props) {
    const [peeps, setPeeps] = useState([])

    useEffect(() => {
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
			.then(res => res.json())
			.then(data => {
				// console.log(data)
				setPeeps(data)
            })

    }, [])

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
                        {peeps.map((classmate, idx) => <ClassmateRow classmate={classmate} key={idx} />)}
                    </tbody>
                </table>
            </>
        )
    }