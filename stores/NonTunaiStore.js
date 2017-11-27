import {observable} from 'mobx';
import {ListView} from 'react-native';
import Rest from 'fetch-on-rest';

class NonTunaiStore{

	// @observable dataSource;
	// @observable question={};
	// @observable dataSourceAnswers;

	constructor(){
		const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
		this.dataSource = ds.cloneWithRows([]);
		this.dataSourceAnswers = ds.cloneWithRows([]);
		this.question = ds.cloneWithRows([]);
		this.api = new Rest("http://asis.anambaskab.go.id/api/v1/");
		this.refresh();
	}

	refresh(){
		const self = this;
		this.api.get('nontunai').then(function(response){
			self.dataSource = self.dataSource.cloneWithRows(response);
		});
	}

}

const NonTunaiStores = new NonTunaiStore();
export default NonTunaiStores;
