import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

const PlacesScreen = ({ redux, onGetPlaces, navigation }) => {

  return (
    //<LinearGradient colors={['#28d486', '#28d486', '#13b69c', '#01697a']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
    <ImageBackground style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }} 
    source={{ uri: redux.detail?.download_url + '.jpg' }}>
      <View style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", width: '80%', height: '30%', borderRadius: 20, alignItems: 'flex-start', justifyContent: 'center', padding: 30}}>
      <Text>Id: {redux.detail?.id }</Text>
      <Text>Author: {redux.detail?.author}</Text>
      <Text>Width: {redux.detail?.width}</Text>
      <Text>Height: {redux.detail?.height}</Text>
      <Text>Url: {redux.detail?.url}</Text>
      <Text>Download_url: {redux.detail?.download_url}</Text>
      </View>
    </ImageBackground>
    //</LinearGradient>
  );
}

const mapStateToProps = (state) => {
  const { redux } = state
  console.log('hola', redux.detail)
  return { redux }
};
  
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);