import React, {Component} from 'react';
import {Container, Content, Button, Text, Body, Right, List, ListItem} from 'native-base';
import axios from 'axios';

import {apiUrl} from '../utils/config';
export default class SppdDetail extends Component{
  state = {
    user: {}
  }

  componentDidMount(){
    const self = this;
    const id = this.props.id;
    axios.get(`${apiUrl}/sp2d/${id}`).then(function(result){
      self.setState({
        user: result.data
      })
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Body>
                <Text>{this.state.user.opd}</Text>
                <Text>{this.state.user.keterangan}</Text>
                <Text>{this.state.user.penerima}</Text>
                <Text>({this.state.user.nilai})</Text>
              </Body>
              <Right>
                <Text note>{this.state.user.tgl}</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }

}
