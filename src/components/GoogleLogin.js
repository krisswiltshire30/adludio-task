import React from 'react'
import { GoogleSigninButton } from 'react-native-google-signin';


function GoogleLogin() {
  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={this._signIn}
      disabled={this.state.isSigninInProgress} />
  )
}

export default GoogleLogin
