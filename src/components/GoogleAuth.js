import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '105775424018-8j2bd08e5thb24umkf8pd5gmltlogmkb.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderButton = () => {
    if (this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon"></i>
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon"></i>
          Sign In With Google
        </button>
      )
    }
  }

  onSignIn = () => {
    this.auth.signIn()
  }
  onSignOut = () => {
    this.auth.signOut()
  }
  render() {
    return (
      <div>
        {this.renderButton()}
      </div>
    );
  }
}

export default GoogleAuth;
