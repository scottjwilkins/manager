import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            placeholder="big@poppa.com"
          />
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          label="password"
          placeholder="123456"
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
 export default LoginForm;
