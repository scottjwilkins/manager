import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import * as actions from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
        Login
        </Button>
      );
  }

  render() {
    const { email, password, error } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            placeholder="big@poppa.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          label="password"
          placeholder="123456"
          onChangeText={this.onPasswordChange.bind(this)}
          value={password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

 export default connect(mapStateToProps, actions)(LoginForm);
