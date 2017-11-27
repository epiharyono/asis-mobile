import React, { Component } from 'react';
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon, Button, Input, Item } from 'native-base';
import {ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';
import LoadingView from 'react-native-loading-view';


// @observer
export default class Sp2d extends Component {

	constructor(){
		super();
		this.state = {
      loading: true
    }
		const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
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
		let nilai = rowData.cair;
		var ket   = "";
		if(nilai == 1){
			ket  = "Sudah Cair Tanggal : "+rowData.tgl_cair;
		}else{
			ket  = "Belum Cair";
		}
		ket  = rowData.nilai;
		return(
			<ListItem>
				<Body>
					<Text>{rowData.nm_sub_unit}</Text>
					<Text note>{rowData.keterangan}</Text>
					<Text note>(Rp. {ket})</Text>
				</Body>
			</ListItem>
		);
	}


	render(){
		if(this.props.loading){
			this.setState({
				loading: true
			})
		}
		const {dataSource} = this.props.store;
		return (
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
		);
	}
}
