import React from 'react'
import './../inputs.scss'

const CheckBox = ({label,checkArray}) => {


    const newcheckArray = checkArray.map((currentValue, index, array) => {
        return (
            <label className="form-checkbox-label">
                <input name={currentValue.text} className="form-checkbox-field" type="checkbox" />
                <i className="form-checkbox-button"></i>
                <span>{currentValue.text}</span>
            </label>
        );
    })

    return (
        <div className="form-checkbox form-checkbox-inline">
            <div className="form-checkbox-legend">{label}</div>
            {
                newcheckArray
            }
        </div>
        
    );
}

export default CheckBox;