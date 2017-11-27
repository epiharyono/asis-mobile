import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import {TouchableOpacity, AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';
import axios from 'axios';

import {apiUrl} from '../utils/config';

const Form = t.form.Form;

const SignInForm = t.struct({
  username: t.String,
  password: t.String
})

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

export default class SignIn extends Component{

  static navigatorStyle = {
    tabBarHidden: true,
  };

  async componentWillMount(){
    //if token exists
    const userId = await AsyncStorage.getItem('@dw:userId');

    if(userId){
      this.props.navigator.resetTo({
        screen: "example.WelcomeScreen",
        title: "A S I S"
      })
    }
  }

  async setStorage(data){
    const {token, userId, username} = data;
    await AsyncStorage.setItem('@dw:token', token);
    await AsyncStorage.setItem('@dw:userId', userId + "");
    await AsyncStorage.setItem('@dw:username', username);

    return true;
  }

  handleGoToSignUp(){
    this.props.navigator.push({
      screen: "example.SignUp",
      title: "Sign Up"
    })
  }

  handleSignIn(){
    const self = this;
    const value = this.refs.form.getValue();
    if(value){
      axios.post(`${apiUrl}/signin`, value).then((res)=>{
        self.setStorage(res.data).then(function(){
          self.props.navigator.resetTo({
            screen: "example.Home",
            title: "Welcome Screen"
          });
        }).catch(function (error){
          console.log('error');
        });
      });
    }
  }

  render(){
    return (
      <Container style={{padding: 10}}>
        <Content>
          <Form
            ref="form"
            type={SignInForm}
            options={options}
          />
          <Button full success onPress={()=> this.handleSignIn()}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}
