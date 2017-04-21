import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyles}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyles: {
    padding: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
