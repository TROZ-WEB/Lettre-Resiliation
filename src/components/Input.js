import React from "react"

function Input (props) {
    return (
        <div>
            <label className="label">{props.label}</label>
            <input
                className="input"
                type="text" 
                value={props.value} 
                name={props.name} 
                placeholder={props.placeholder}
                onChange={props.handleInputChange} 
            />
        </div>
    )
}

export default Input