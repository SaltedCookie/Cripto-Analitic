import React, { Component } from 'react';
import styled from 'styled-components';
import CryptoData from '../CryptoData/CryptoDatas';
import CryptoSearch from '../CryptoSearch/CryptoSearch';



class MainPage extends Component {

  state = {
    filter: '',
  }

  setFilterValue = (value) => {
    console.log('hello from filter value', value);
    this.setState({filter: value});
  }

  render() {
    return(
      <div>
        <CryptoSearch setFilterValue={this.setFilterValue} />
        <CryptoData filter={this.state.filter} />
      </div>
    )
  }
}

export default MainPage;
