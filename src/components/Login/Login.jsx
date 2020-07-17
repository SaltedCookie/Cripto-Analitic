import React, { Component } from "react";
// import ReactDOM from "react-dom";
import styled from "styled-components";
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';
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
  justify-content: space-between;
  margin-top: 20px;
`;

const StyleButton = styled(Button)`
  margin-right: 40px;
  margin-left: 40px;
`;

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  handleButtonOnClick = (history, address) => {
    redirect(history, address)
  }

  checkUser = () => {
    const {email, password} = this.state;
    if (email === 'admin' && password === 'admin') {
      redirect(this.props.history, '/MainPage')
    } else {
      console.log('wrong');
    }
  };

  handleOnChangeEmail = (event) => {
    const {value} = event.target;
    this.setState({...this.state, email: value})
  }

  handleOnChangePassword = (event) => {
    const {value} = event.target;
    this.setState({...this.state, password: value})
  }

  render() {
    return(
    <LoginWrapper>
    <h1>Welcome to Crypto Analitic</h1>
    <StyledForm>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="user" onChange={this.handleOnChangeEmail} placeholder="John@mail.com" />
        <Label for="exampleEmail">Password</Label>
        <Input type="password" name="password" onChange={this.handleOnChangePassword} id="password" placeholder="Password" />
        <ButtonWrapper>
          <StyleButton type='button' name='comeIn' onClick={this.checkUser}>Войти</StyleButton>
          <StyleButton type='button' name='registration' onClick={() => this.handleButtonOnClick(this.props.history, '/Registration')}>Зарегистрироваться</StyleButton>
        </ButtonWrapper>
      </FormGroup>
    </Form>
    </StyledForm>
    </LoginWrapper>
    )
  }
}

export default Login;
