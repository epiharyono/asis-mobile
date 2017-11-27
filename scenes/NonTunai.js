import React, { Component } from 'react';
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon, Button, Input, Item } from 'native-base';
import {ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';
import LoadingView from 'react-native-loading-view';


// @observer
export default class NonTunai extends Component {

	constructor(){
		super();
		this.state = {
      loading: true
    }
	}

	renderHeader(){
		const {title} = this.props;

		let header = (
			<Header>
				<Left>
					<Button transparent onPress={()=> Actions.pop()}><Icon name="arrow-back" style={{color: '#0098ff'}}/></Button>
				</Left>
				<Body>
					<Title>{title} </Title>
				</Body>
			</Header>
		);

		return header;

	}

	renderRow(rowData){
		let nilai = rowData.status_progress;
		var ket   = "";
		if(nilai == 1){
			ket  = "Pengajuan Tanggal : "+rowData.tanggal;
		}else{
			ket  = "Data Belum Final";
		}
		return(
			<ListItem>
				<Body>
					<Text>{rowData.nm_opd}</Text>
					<Text note>{rowData.keterangan}</Text>
					<Text note>({ket})</Text>
				</Body>
			</ListItem>
		);
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				loading: false
			})
		}, 5000)
	}

	render(){
		if(this.props.loading){
			this.setState({
				loading: false
			})
		}
		const {dataSource} = this.props.store;
		return (
			<LoadingView loading={this.state.loading}>
				<Container>
				  {this.renderHeader()}
				  <Content>
					<ListView
						dataSource={dataSource}
						renderRow={this.renderRow.bind(this)}
						enableEmptySections={true}
					/>
				  </Content>
				</Container>
			</LoadingView>
		);
	}
}
