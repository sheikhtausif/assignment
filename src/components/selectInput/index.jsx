import React from 'react'
import "./index.css"

const SelectInput = () => {

    return (
        <div className="selectContainer">
            <div className="selectDiv">
                <label>Select - </label>
                <select>
                    <option value="pastTest">Past test</option>
                </select>
            </div>
            <button>Schedule new test</button>
        </div>
    )
}

export default SelectInput