import React from 'react'
import './../inputs.scss'

const Select_option = ({label,option,hasError,msjError}) => {

    const formStyle = 'form-element form-select ' + ((hasError)?'form-has-error':'');
    const jsxHelpMsj = (<small class="form-element-hint">{msjError}</small>);     

    const newOption = option.map((currentValue, index, array) => {
        return (<option value={currentValue.value}>{currentValue.text}</option>)
    })
    return (
        <div className={formStyle}>
            <select className="form-element-field">
                <option disabled selected value="-1" className="form-select-placeholder"></option>
                {
                    newOption
                }
            </select>
            <div className="form-element-bar"></div>
            <label className="form-element-label" >{label}</label>
            {(hasError)?jsxHelpMsj:''}
        </div>
    );
}

export default Select_option;