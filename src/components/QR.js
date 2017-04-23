import React, { Component } from 'react';
import QRCode from 'react-native-qrcode-svg';

//Simple usage, defaults for all but the value

class QR extends Component {

  render() {
    return (
      <QRCode
        value="https://scottjwilkins.com"
      />
    );
  }
}

export default QR;
