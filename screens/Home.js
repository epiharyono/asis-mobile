import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, ListItem } from 'native-base';
import {Image, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import {allPosts, getLra} from '../actions';

class Home extends Component {

  async componentDidMount(){
    const id = await AsyncStorage.getItem('@dw:userId');
    this.props.dispatch(allPosts());
  }

  renderRow(post){
    return (
      <ListItem key={post.id} >
        <Body>
          <Text>{post.id}</Text>
        </Body>
      </ListItem>
    )
  }

  render(){
    return (
      <Container>
        <Content>
          {this.props.data.posts.map((post)=> this.renderRow(post))}
        </Content>
      </Container>
    )
  }

}

const mapStateToProps = (state)=>({
  data: state.postsReducer
})

export default connect(mapStateToProps)(Home)
