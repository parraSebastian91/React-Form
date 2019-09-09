import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setInstitucion } from './actions'
import PropTypes from 'prop-types'; 

//import logo from './logo.svg';
import ContenedorFormulario from './Component/Contedorformulario/contedorformulario'


import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = { institucion: null }
  }
  render() {
    this.props.setInstitucion('capredena')
    return (
      < div className="App" >
        <ContenedorFormulario></ContenedorFormulario>
      </div >)
  }
}

/*App.PropTypes = {
  setInstitucion: PropTypes.func.isRequired
}*/

const mapDispatchToProps = (dispatch) => (
  {
    setInstitucion: value => dispatch(setInstitucion('capredena'))
  }
)

const appConnected = connect(null, mapDispatchToProps)(App);

export default appConnected;