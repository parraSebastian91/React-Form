import React from 'react';
import logo from './logo.svg';
import { createStore } from 'redux'
import ContenedorFormulario from './Component/Contedorformulario/contedorformulario'
import './App.css';

const store = createStore(() => {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {

  const action  = {type:'setAction', value:'action 1'}
  store.dispatch(action)
  return (
    <div className="App">
        <ContenedorFormulario></ContenedorFormulario>
    </div>
  );
}

export default App;
