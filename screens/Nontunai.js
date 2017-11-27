import React, {Component} from 'react';
import {Container, Content, Text, Button, List, ListItem, Body, Header} from 'native-base';
import { AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

import {apiUrl} from '../utils/config';
import {allNontunai} from '../actions';

class Nontunai extends Component {

  state = {
    nontunais: [],
  }

  async componentDidMount(){
    const userId = await AsyncStorage.getItem('@dw:userId');
    this.props.dispatch(allNontunai(userId));
  }

  handleGoToDetail(id){
    this.props.navigator.push({
      screen: 'example.NontunaiDetail',
      title: "Detail Nontunai",
      passProps: {
        id: id
      }
    })
  }

  renderRow(nontunai){
    return (
      <ListItem key={nontunai.id} onPress={()=> this.handleGoToDetail(nontunai.id)}>
        <Body>
          <Text>{nontunai.opd}</Text>
          <Text note>{nontunai.keterangan}</Text>
          <Text note>{nontunai.tanggal}</Text>
        </Body>
      </ListItem>
    )
  }

  render(){
    if(this.props.data.loading){
      return (
        <Container>
          <Content>
            <Spinner color='blue' />
          </Content>
        </Container>
      )
    }
  }

  render(){
    return(
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
})

export default connect(mapStateToProps)(Nontunai)
