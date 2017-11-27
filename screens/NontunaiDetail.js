import React, {Component} from 'react';
import {Container, Content, Button, Text, Body, Right, List, ListItem, Spinner} from 'native-base';
import axios from 'axios';
import {connect} from 'react-redux';

import {apiUrl} from '../utils/config';
import {getNontunai} from '../actions';


class NontunaiDetail extends Component{

  componentDidMount(){
    const id = this.props.id;
    this.props.dispatch(getNontunai(id));
  }

  renderRow(nontunai){
    return (
      <ListItem key={nontunai.id} >
        <Body>
          <Text>{nontunai.nm_penerima}</Text>
          <Text note>{nontunai.keterangan}</Text>
          <Text note>{nontunai.total_bersih}</Text>
        </Body>
      </ListItem>
    )
  }


  render(){

    if(this.props.data.loading){
      return (
        <Container>
          <Content>
            <Spinner color="blue"/>
          </Content>
        </Container>
      )
    }

    return (
      <Container>
        <Content>
          <List>
            {this.props.data.nontunais.map((nontunai)=> this.renderRow(nontunai))}
          </List>
        </Content>
      </Container>
    )
  }

}


const mapStateToProps = (state)=> ({
  data: state.nontunaisReducer
});

export default connect(mapStateToProps)(NontunaiDetail);
