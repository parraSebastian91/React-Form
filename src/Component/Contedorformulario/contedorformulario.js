import React, { Component } from 'react'
import {  Row, Col, Grid } from 'react-flexbox-grid'
import Formulario from './Formulario/formulario'
import './contedorformulario.css'

class ContenedorFormulario extends Component {
    render() {
        return (
            <Grid fluid >
                <video width="1280" height="720" class="background" autoplay muted loop>
                    <source src="https://codepen.jonnitto.ch/BackgroundVideo.mp4" type="video/mp4" />
                </video>
                <Row >
                    <Col xs={12} mdOffset={2} md={8} >
                        <form className="form-card">
                            <fieldset class="form-fieldset">
                                <Formulario></Formulario>
                            </fieldset>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ContenedorFormulario;