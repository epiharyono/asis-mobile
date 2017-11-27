import React, { Component } from 'react';
import {Container, Content, List, ListItem, Text, Icon, Body, Spinner} from 'native-base';
import { AsyncStorage } from 'react-native';
import {connect} from 'react-redux';

import {apiUrl} from '../utils/config';
import {getLra} from '../actions';


class RealisasiAnggaran extends Component {

  async componentDidMount(){
    const id = await AsyncStorage.getItem('@dw:userId');
    this.props.dispatch(getLra(id));
  }

  renderRow(realisasi){
    return (
      <ListItem key={realisasi.id} >
        <Body>
          <Text>{realisasi.opd}</Text>
          <Text note>Anggaran : {realisasi.anggaran}</Text>
          <Text note>Realisasi: {realisasi.realisasi}</Text>
          <Text note>Sisa     : {realisasi.selisih}</Text>
          <Text note>Persentase: {realisasi.persen}</Text>
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
            {this.props.data.realisasis.map((realisasi)=> this.renderRow(realisasi))}
          </List>
        </Content>
      </Container>
    )
  }

}

const mapStateToProps = (state)=> ({
  data: state.realisasiReducer
})

export default connect(mapStateToProps)(RealisasiAnggaran);
