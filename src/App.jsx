import React, { Component } from 'react';

import Counter from './components/Counter';

class App extends Component {
  state = {
    count: 0,
  };

  handleCountUp = () => this.setState({ count: this.state.count + 1 });
  handleCountDown = () => this.setState({ count: this.state.count - 1 });

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <Counter
          count={count}
          onCountUp={this.handleCountUp}
          onCountDown={this.handleCountDown}
        />
      </div>
    );
  }
}

export default App;
