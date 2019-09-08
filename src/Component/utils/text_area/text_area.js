import React from 'react'
import './../inputs.scss'

const Text_area = ({ label, placeHolder, hasError, msjError }) => {
    const formStyle = 'form-element form-textarea ' + ((hasError)?'form-has-error':'');
    const jsxHelpMsj = (<small class="form-element-hint">{msjError}</small>);
    return (
        <div className={formStyle}>
            <textarea  className="form-element-field" placeholder={placeHolder}></textarea>
            <div className="form-element-bar"></div>
            <label className="form-element-label" >{label}</label>
            {(hasError)?jsxHelpMsj:''}
        </div>
    );
}

export default Text_area;