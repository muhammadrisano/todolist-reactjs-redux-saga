import React from 'react'

const Card = props => {
    return (
        <div className="col-md-3">
            <div className="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{props.category}</h6>
                    <p class="card-text">{props.content}</p>
                    <button className="btn btn-primary mr-2">Edit</button>
                    <button className="btn btn-primary">Hapus</button>
                </div>
            </div>
        </div>
    )

}
export default Card;