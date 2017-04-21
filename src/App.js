import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common'

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyAqSJn1rDVexyyt8yR7oNB8j8XY5NMNOt4',
    authDomain: 'reactnativeauth-175a5.firebaseapp.com',
    databaseURL: 'https://reactnativeauth-175a5.firebaseio.com',
    projectId: 'reactnativeauth-175a5',
    storageBucket: 'reactnativeauth-175a5.appspot.com',
    messagingSenderId: '257306179218'
  };

  firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="I-manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
export default App;
