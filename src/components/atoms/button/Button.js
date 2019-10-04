import React from 'react'
import './styles.css';
export default function Button(props) {
    return (
        <button className="btn btn-warning" onClick={() => props.onClick("hello kamu")}>{props.title}</button>
    )
}
