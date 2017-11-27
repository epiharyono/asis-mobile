import React, {Component} from 'react';
import {Container, Content, Text, Thumbnail, Button, H3, Spinner} from 'native-base';
import {View, Image, Dimensions} from 'react-native';
import { AsyncStorage} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';

import {apiUrl} from '../utils/config';
import {getProfile} from '../actions';

let {height, width} = Dimensions.get('window');

class Profile extends Component{


  async componentWillMount(){
    this.props.navigator.toggleTabs({ to: 'show', animated: false });
    //if token exists
    const token = await AsyncStorage.getItem('@dw:userId');
    if(!token){
      this.props.navigator.resetTo({
        screen: "example.SignIn",
        title: "Sign In"
      })
    }
  }

  state  = {
    profile: {}
  }

  images = [
    {id: "1", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
    {id: "2", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
    {id: "3", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
  ]

  user = {
    imageUri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"
  }

  async componentDidMount(){
    const id = await AsyncStorage.getItem('@dw:userId');
    this.props.dispatch(getProfile(id));
  }


  handleSignOut(){
    const self = this;
    AsyncStorage.clear(()=>{
      self.props.navigator.resetTo({
        screen: "example.SignIn",
        title: "Sign In"
      })
    });
  }

  renderRow({id, uri}){
    return (
      <View key={id} style={{flex: 1}}>
        <Image
          style={{width: width/3, height: width/3}}
          source={{uri}}
        />
      </View>
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

    return(
      <Container>
        <Content>
          <View style={{flex: 1, flexDirection: 'row', padding: 15}}>
            <View style={{flex: 1, marginRight: 15}}>
              <Thumbnail large source={{ uri: this.props.data.profile.imgurl }} />
            </View>
            <View style={{flex: 2}}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                  <View style={{flex: 1}}>
                    <H3>21</H3>
                    <Text note>posts</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <H3>21</H3>
                    <Text note>posts</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <H3>21</H3>
                    <Text note>posts</Text>
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Button light full small>
                    <Text>Edit</Text>
                  </Button>
                  <Button light small full onPress={()=> this.handleSignOut()}>
                    <Text>Logout</Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text>{this.props.data.profile.nama}</Text>
            <Text>{this.props.id}</Text>
          </View>

          <View style={{flexDirection: 'row', flex: 1}}>
            {this.images.map((image)=> this.renderRow(image))}
          </View>

        </Content>
      </Container>
    )
  };

}

const mapStateToProps = (state)=> ({
  data: state.profilesReducer
})

export default connect(mapStateToProps)(Profile);
