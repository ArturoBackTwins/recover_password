import React, { useState } from 'react'
import { useEffect } from 'react';
import {
    Container,
    Content,
    Form,
    ButtonToolbar,
    Button,
    Panel,
    FlexboxGrid,
    Message,
    useToaster
} from 'rsuite';
import { useAsyncFn } from 'react-use';
import axiosAPI from '../config/api.config';
import WebServices from '../config/webservices';

const FormRecoverPassword = ({ setSuccess, access_key }) => {
    const [password, setPassword] = useState('')

    const [state, doFetch] = useAsyncFn(async () => {
        const url = `${WebServices.recover_password.change_password}`;
        const res = await axiosAPI.post(url, { accessKey: access_key, password });
        return res;
    }, [access_key, password]); 


    const handleChange = () => doFetch();
    
    useEffect(() => {
        if (state.value) setSuccess(true)
    }, [state])
    

    return (
        <Container>
            <Content>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>
                        <Panel header={<h3 style={{ color: "#fff" }}>Recupera tu contraseña</h3>} bordered>
                            <Form fluid>
                                <Form.Group>
                                    <Form.ControlLabel color='#fff'>Nueva contraseña</Form.ControlLabel>
                                    <Form.Control name="new_password" type='password' onChange={(e) => setPassword(e)} />
                                    <Form.HelpText>{ state?.error ? `${state?.error.response.data.error}` : '' }</Form.HelpText>
                                </Form.Group>
                                <Form.Group>
                                    <ButtonToolbar>
                                        <Button loading={state.loading} onClick={handleChange} appearance="primary" color='red'>Cambiar</Button>
                                    </ButtonToolbar>
                                </Form.Group>
                            </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    )
}

export default FormRecoverPassword