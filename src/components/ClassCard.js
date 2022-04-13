import React from 'react'

export default function ClassCard(props) {
    console.log(props.post)
    return (
        <>
            <div className="card my-3">
                <div className="card-header">
                    <p className="mb-0"><strong>{ props.post.title }</strong></p>
                    <h6 className="card-subtitle mb-3 text-muted">{ props.post.date_created }</h6>
                </div>
                <div className="card-body pb-1">
                    <p className="card-text">{ props.post.body }</p>
                    <footer className="blockquote-footer mt-3 mb-0">{ props.post.user.first_name } { props.post.user.last_name }</footer>
                    
                </div>
            </div>
        </>
    )
}
