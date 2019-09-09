import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import InputNormal from './../../utils/inputs/inputs'
import TextArea from "./../../utils/text_area/text_area";
import SelectOption from "./../../utils/select/select";
import CheckBox from "./../../utils/checkbox/checkbox";
import RadioButtom from './../../utils/radio_buttom/radio_buttom'
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
                    <InputNormal
                        label={'Nombre Institucion'}
                        placeHolder={'Ingrese nombre Institucion'}
                        hasError={false}
                        msjError={'ERROR!'}
                    ></InputNormal>
                </Col>
                <Col xs={12} md={6}>
                    <TextArea
                        label={'Nombre Institucion'}
                        placeHolder={'Ingrese nombre Institucion'}
                        hasError={true}
                        msjError={'ERROR!'}>                            
                        </TextArea>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <SelectOption
                        label={'Nombre Institucion'}
                        option={option}
                        hasError={true}
                        msjError={'ERROR!'}
                    ></SelectOption>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <CheckBox
                        label={'Nombre Institucion'}
                        checkArray={check}                       
                    ></CheckBox>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                   <RadioButtom
                   label={'Nombre Institucion'}
                   radioArray={check}      
                   grupo={'radio'}   
                   hasError={false}
                   msjError={'ERROR!'}     
                   >
                   </RadioButtom>
                </Col>
            </Row>
        </Grid>
    );
}

export default Formulario;