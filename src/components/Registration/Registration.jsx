import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import { redirect } from '../../common/helpers';

const StyledForm = styled.div`
  width: 400px;
  margin: auto;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const StyleButton = styled(Button)`
  margin-right: 50px;
  margin-left: 10px;
`;

class Registration extends Component {
  handleButtonOnClick = (history, address) => {
    redirect(history, address)
  }

  render() {
    return(
    <LoginWrapper>
    <h1>Welcome to Crypto Analitic</h1>
    <StyledForm>
      <Form>
        <FormGroup>
          <Label>Имя</Label>
          <Input type='text' name='name' placeholder="Name" />
          <Label>Е-mail</Label>
          <Input type='e-mail' name='mail' id="exampleEmail" placeholder="John@mail.com" />
          <Label>Пароль</Label>
          <Input type='password' name='password' id="examplePassword" placeholder="Password" />
          <Label>Повторите пароль</Label>
          <Input type='password' name='password' id="repeatPassword" placeholder="Repeat password" />
          <ButtonWrapper>
            <StyleButton type='button' name='registration'>Регистрация</StyleButton>
            <StyleButton type='button' name='comeIn' onClick={() => this.handleButtonOnClick(this.props.history, '/login')}>Войти</StyleButton>
          </ButtonWrapper>
        </FormGroup>
      </Form>
    </StyledForm>
    </LoginWrapper>
    )
  }
}

export default Registration;
