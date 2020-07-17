import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';

class CryptoSearch extends Component { 

  handleOnChange = (event) => {
    const {value} = event.target;
    this.props.setFilterValue(value);
  }

  render() {
    return(
    <div>
      <InputGroup>
        <Input placeholder="username" onChange={this.handleOnChange}/>
      </InputGroup>
    </div>)
  }
}

export default CryptoSearch;