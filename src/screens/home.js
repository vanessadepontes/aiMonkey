import * as React from 'react';
import { View, TextInput, Text, Dimensions, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { setDetails } from '../store/actions'
import styles from '../styles/home';
import { getImages } from '../services/services';


function HomeScreen({ navigation, props, redux, onGetImages, route, onGetDetails, onGetPlaces }) {
  //const [valueCO, onChangeTextCO] = React.useState('');
  //const [error, setError] = React.useState(false);
  //const {username} = route.params;
  { !redux.data[0] && onGetImages()}

  return (
      <View>
        <FlatList
        	data={redux.data}
        	renderItem={({ item }) => 
					<TouchableOpacity onPress={() => {onGetDetails(item); navigation.navigate('Details')} } style={{
						width: (Dimensions.get('window').width)/3, height: (Dimensions.get('window').width)/3 }}>
						<Image style={{flex: 1}}
						source={{ uri: item.download_url + '.jpg' }} />
					</TouchableOpacity>
						}
					numColumns={'3'}
        	keyExtractor={item => item.id}
					ListEmptyComponent={() => 
						<Text style={{textAlign: 'center'}}>Sin Resultados</Text>
					}
      	/>
      </View>
  );
}

const mapStateToProps = (state) => {
  const { redux } = state
  return { redux }
};
  
const mapDispatchToProps = (dispatch) => ({
  onGetImages: () => dispatch(getImages()),
	onGetDetails: (data) => dispatch(setDetails(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);