import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Icon, Body, Spinner} from 'native-base';
import { AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

import {apiUrl} from '../utils/config';
import {allSPPD} from '../actions';

class Sppd extends Component{

  state = {
    sppds: [],
    idUser: {},
  }

  async componentDidMount(){
    const userId = await AsyncStorage.getItem('@dw:userId');
    this.props.dispatch(allSPPD(userId));
  }

  handleGoToEdit(id){
    this.props.navigator.push({
      screen: 'example.SppdDetail',
      title: "Detail SPPD",
      passProps: {
        id: id
      }
    })
  }

  renderRow(sppd){
    return (
      <ListItem key={sppd.id} onPress={()=> this.handleGoToEdit(sppd.id)}>
        <Body>
          <Text>{sppd.opd}</Text>
          <Text note>{sppd.keterangan}</Text>
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
    return (
      <Container>
        <Content>
          <List>
            {this.props.data.sppds.map((sppd)=> this.renderRow(sppd))}
          </List>
        </Content>
      </Container>
    )
  }
}


const mapStateToProps = (state)=> ({
  data: state.sppdsReducer
})

export default connect(mapStateToProps)(Sppd)
