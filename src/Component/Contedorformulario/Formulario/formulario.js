import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Input_normal from './../../utils/inputs/inputs'
import Text_area from "./../../utils/text_area/text_area";
import Select_option from "./../../utils/select/select";
import Check_box from "./../../utils/checkbox/checkbox";
import Radio_buttom from './../../utils/radio_buttom/radio_buttom'
import './formulario.scss'

const Formulario = () => {

    const option = [
        { value: 1, text: 'uno' },
        { value: 2, text: 'dos' },
        { value: 3, text: 'tres' }
    ]

    const check = [
        { text: 'uno' },
        { text: 'dos' },
        { text: 'tres' }
    ]

    return (
        <Grid fluid >
            <Row>
                <Col md={12}>
                    <legend class="form-legend">Formulario de ingreso para consultorias</legend>
                </Col>
            </Row>
            <Row >
                <Col xs={12} md={6}>
                    <Input_normal
                        label={'Nombre Institucion'}
                        placeHolder={'Ingrese nombre Institucion'}
                        hasError={false}
                        msjError={'ERROR!'}
                    ></Input_normal>
                </Col>
                <Col xs={12} md={6}>
                    <Text_area
                        label={'Nombre Institucion'}
                        placeHolder={'Ingrese nombre Institucion'}
                        hasError={true}
                        msjError={'ERROR!'}>                            
                        </Text_area>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Select_option
                        label={'Nombre Institucion'}
                        option={option}
                        hasError={true}
                        msjError={'ERROR!'}
                    ></Select_option>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Check_box
                        label={'Nombre Institucion'}
                        checkArray={check}                       
                    ></Check_box>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                   <Radio_buttom
                   label={'Nombre Institucion'}
                   radioArray={check}      
                   grupo={'radio'}   
                   hasError={false}
                   msjError={'ERROR!'}     
                   >
                   </Radio_buttom>
                </Col>
            </Row>
        </Grid>
    );
}

export default Formulario;