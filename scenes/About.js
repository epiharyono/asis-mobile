import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import { Header, Body, Title, Container, Content, Left, Button, Icon, Right } from 'native-base';

export default class About extends Component {

	renderHeader(){
		const {title} = this.props;
		return (
			<Header>
  				<Left>
  					<Button transparent><Icon name='menu' /></Button>
  				</Left>
          <Body><Title>{title}</Title></Body>
          <Right />
			</Header>
		)
	}

	render(){
		return (
			<Container>
			  {this.renderHeader()}
			  <Content >
          <Text style={styles.welcome}>About ....</Text>
			  </Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
	},
	welcome: {
		fontSize:20,
		textAlign: 'center',
		margin: 10,
	},
});
