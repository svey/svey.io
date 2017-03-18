import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
        <h1>Marcus Svehlak</h1>
        <p>
          marcus@svey.io
          github.com/svey
        </p>

      </div>
    );
  }
}
export default Counter;