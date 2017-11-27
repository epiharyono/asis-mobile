import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import {Container, Content, Button, Icon, List, ListItem, Left, Right, Body, Switch, Header, H1} from 'native-base';
import { Navigation } from 'react-native-navigation';

import {AsyncStorage} from 'react-native';

export default class Menu extends Component {

    static navigatorStyle = {
      navBarHidden: true,
    };

    // async componentWillMount(){
    //   this.props.navigator.toggleTabs({ to: 'show', animated: false });
    //   //if token exists
    //   const token = await AsyncStorage.getItem('@dw:token');
    //   if(!token){
    //     this.props.navigator.resetTo({
    //       screen: "example.SignIn",
    //       title: "Sign In"
    //     })
    //   }
    // }

  hadleGoToSppd(){
    this.props.navigator.push({
      screen: 'example.Sppd',
      title: "SPPD ONLINE",
      animationType: 'slide-up'
    })
  }

  hadleGoToNontunai(){
    this.props.navigator.push({
      screen: 'example.Nontunai',
      title: "Transaksi Nontunai",
      animationType: 'fade',
    })
  }

  hadleGoToRealisasi(){
    this.props.navigator.push({
      screen: 'asis.RealisasiAnggaran',
      title: 'Laporan Realisasi Anggaran',
      animationType: 'slide-down'
    })
  }

  render(){
    return(
      <Container>
        <Header style={{ backgroundColor: '#5067FF' }}>
          <H1 style={{ marginTop: 10, color: 'white'}}>Menu ASIS</H1>
        </Header>

        <Content style={{ padding: 10}}>
          <List>
            <ListItem icon onPress={()=> this.hadleGoToSppd()}>
              <Left><Icon name="paper" /></Left>
              <Body>
                  <Text>SPPD Online</Text>
              </Body>
              <Right>
                <Text></Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon onPress={()=> this.hadleGoToNontunai()}>
              <Left>
                <Icon name="paper" />
              </Left>
              <Body>
                <Text>Transaksi Nontunai</Text>
              </Body>
              <Right>
                <Text></Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon onPress={()=> this.hadleGoToRealisasi()}>
              <Left>
                <Icon name="paper" />
              </Left>
              <Body>
                <Text>Realisasi Anggaran</Text>
              </Body>
              <Right>
                <Text></Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
