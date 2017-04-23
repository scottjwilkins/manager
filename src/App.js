import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import QR from './components/QR';
import { Header } from './components/common';


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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <Header headerText="QR code generator" />
          <QR />
        </View>
      </Provider>
    );
  }
}
export default App;
