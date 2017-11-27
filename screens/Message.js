import React, { Component } from 'react';
import {Container, Content, Text, Header, Item, Icon, Input } from 'native-base'


export default class Message extends Component {

  static navigatorStyle = {
    navBarHidden: true,
  };

  render(){
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
        <Content>
          <Text></Text>
          <Text></Text>
          <Text>Under Constracktions... </Text>
        </Content>
      </Container>
    )
  }

}
