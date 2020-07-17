import React, { Component } from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';

const DataWrapper = styled.div`
  width: 800px;
  margin: auto;
`;

const Datas = styled.div`
  width: 150px;
  height: 150px;
  margin: auto;
`;

const StyledItem = styled(ListGroupItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemValue = styled.div`
  text-align: center;
`;

const SpecialSymbol = styled.div`
  text-align: center;
`;

const isPositiveNumber = (value) => {
  return value >= 0;
}

const StyledItemValue = styled(ItemValue)`
  color: ${props => parseFloat(props.value) === 0 ? 'black' : props.isPositive ? 'green' : 'red'};
`;

class CryptoData extends Component {

  state = {
    data: {},
  }


  async componentDidMount() {
    const response = await fetch('https://poloniex.com/public?command=returnTicker');
    const data = await response.json();
    this.setState({data});
  }

  

  handleOnChange = () => {
    const spec1 = '&#9734;';
    const spec2 = '&#9733;';
    if (spec1) {
      SpecialSymbol.innerHTML = spec2;
    } else {
      SpecialSymbol.innerHTML = spec1;
    }
  }

  renderCurrencyItem = (pair, value) => (
    <StyledItem>
      <ItemValue>Currency: {pair} </ItemValue>
      <ItemValue>Price: {value.last} </ItemValue>
      <ItemValue>Lowest Ask: {value.lowestAsk} </ItemValue>
      <ItemValue>Highest Bid: {value.highestBid} </ItemValue>
      <StyledItemValue value={value.percentChange} isPositive={isPositiveNumber(value.percentChange)}>Percent Change: {value.percentChange} </StyledItemValue>
      <SpecialSymbol onChange={this.handleOnChange}>&#9734;</SpecialSymbol>
    </StyledItem>
  )
  // &#9733; - закрашенная звезда


  renderCurrencyItems = (arr) => 
    arr.map(([key, value]) => this.renderCurrencyItem(key, value));

  filterCurrencyData = (curData, filter) => {
    const dataArr = Object.entries(curData);
    if (filter === '') {
      console.log('im here');
      return dataArr;
    }
    return dataArr.filter(e => e[0].includes(filter));
  }
    


  render() {
    console.log(this.state);
    const {data} = this.state;
    const filteredData = this.filterCurrencyData(data, this.props.filter);
    console.log('WORK KUZ WORK', filteredData);
    return(
    <DataWrapper>
      <ListGroup>
        {this.renderCurrencyItems(filteredData)}
      </ListGroup>
    </DataWrapper>
    )
  }
}

export default CryptoData;
