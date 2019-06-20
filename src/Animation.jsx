// @flow

import React from 'react';
import lottie from 'lottie-web';
import animationData from './animations/animation.json';

export default class Animation extends React.PureComponent<> {
  constructor(props: Props) {
    super(props);

    this.animationRef = React.createRef();
  }

  componentDidMount() {
    const node = this.animationRef.current;

    lottie.loadAnimation({
      container: node, // Required
      animationData, // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "Hello World", // Name for future reference. Optional.
    })
  }

  render(): React.Element<'div'> {
    return (
        <div className="Animation" ref={this.animationRef} />
    );
  }
}
