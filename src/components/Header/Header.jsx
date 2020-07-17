import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: black;
  margin: 15px;
  width: 20%;
  height: 60px;
  :hover {
    text-decoration: none;
    color: orange;
  }
  display: flex;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  width: 60%;
  display: flex;
  justify-content: flex-start;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin: auto;
  text-align: center;
  display: flex;
`;

class Header extends Component {
  render() {
    return(
    <HeaderWrapper>
      <StyledH1>Crypto Analitic</StyledH1>
      <StyledLink to='/MainPage'>Главная</StyledLink>
      <StyledLink to='/Login'>Личный кабинет</StyledLink>
      <StyledLink to='/Favorites'>Избранное</StyledLink>
    </HeaderWrapper>)
  }
}

export default Header;
