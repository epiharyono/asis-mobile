import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import { Header, Body, Title, Container, Content, Left, Button, Icon, Right, ListItem, Switch } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import {Actions} from 'react-native-router-flux';

export default class Apps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 4000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

	renderHeader(){
		const {title} = this.props;
		return (
			<Header>
				<Button transparent><Icon name='menu' /></Button>
        <Body><Title>ASIS</Title></Body>
			</Header>
		)
	}

	render(){
		return (
			<Container>
			  {this.renderHeader()}
			  <Content>
                    <View style={styles.container}>
		                <ImageSlider
		                    images={[
		                        'http://asis.anambaskab.go.id/style/react/react1.png',
		                        'http://asis.anambaskab.go.id/style/react/react2.png',
		                        'http://asis.anambaskab.go.id/style/react/react3.png',
		                    ]}
		                    position={this.state.position}
		                    onPositionChanged={position => this.setState({position})}/>
                    </View>

                    <View style={styles.list}>
                    	<View style={styles.item} >
                    		<Button success bordered block onPress={()=> Actions.Sp2d()}><Icon name="navigate" /><Text>SP2D ONLINE </Text></Button>
                    	</View>
                    	<View style={styles.item} >
                    		<Button success bordered block onPress={()=> Actions.NonTunai()}><Icon name="eye" /><Text>NON TUNAI </Text></Button>
                    	</View>
                    </View>

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
	list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        padding: 10,
        backgroundColor: '#f5fcff',
    },
    item: {
        margin: 2,
        padding: 2,
    }
});
