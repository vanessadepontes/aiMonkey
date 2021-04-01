// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home.js';
import DetailsScreen from './src/screens/details.js';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/store/reducer.js';
import thunk from "redux-thunk" 
import { getImages } from './src/services/services.js'

const store = createStore(reducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

class App extends React.Component {
  componentDidMount () {
    getImages(1);
  }

  render() {
    return (
      <Provider store={store}>
         <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
