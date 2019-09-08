import React from 'react'
import './../inputs.scss'

const Input_normal = ({label,placeHolder,hasError,msjError}) => {
    const formStyle = 'form-element form-input ' + ((hasError)?'form-has-error':'');
    const jsxHelpMsj = (<small class="form-element-hint">{msjError}</small>);
    return (        
        <div className={formStyle}>
            <input className="form-element-field" placeholder={placeHolder} type="input" required />
            <div className="form-element-bar"></div>
            <label className="form-element-label">{label}</label>            
            {(hasError)?jsxHelpMsj:''}
        </div>
    );
}


export default Input_normal;