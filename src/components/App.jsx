import React from 'react';
import autoBindReact from 'auto-bind/react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };
    autoBindReact(this);
  }

  onSearchHanler(keyword) {
    this.setState({ keyword });
  }

  render() {
    return (
      <>
        <AppHeader onSearch={this.onSearchHanler} />
        <AppBody keyword={this.state.keyword} />
      </>
    );
  }
}
