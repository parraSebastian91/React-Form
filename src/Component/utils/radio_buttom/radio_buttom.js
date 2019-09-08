import React from 'react'
import './../inputs.scss'

const Radio_buttom = ({label,radioArray,grupo,hasError,msjError}) => {

    const formStyle = 'form-radio form-radio-inline ' + ((hasError)?'form-has-error':'');
    const jsxHelpMsj = (<small class="form-element-hint">{msjError}</small>);

    const newRadioArray = radioArray.map((currentValue, index, array) => {
        return (
            <label class="form-radio-label">
                <input name={grupo} class="form-radio-field" type="radio" required value={currentValue.texto} />
                <i class="form-radio-button"></i>
                <span>{currentValue.text}</span>
            </label>
        );
    })

    return (
        <div class={formStyle}>
            <div class="form-radio-legend">{label}</div>
            {
                newRadioArray
            }
            {(hasError)?jsxHelpMsj:''}
        </div>
    );
}

export default Radio_buttom;