// @flow

import React from 'react';
import Animation from './Animation';

export default class App extends React.PureComponent<> {
  render(): React.Element<'div'> {
    return (
      <div className="App">
          <Animation />
      </div>
    );
  }
}
