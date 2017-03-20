import React from 'react';
import { Link } from 'react-router';
/**
 * A counter button: tap the button to increase the count.
 */
class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to='/projects'><button>Projects</button></Link>
        <Link to='/about'><button>About</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
      </div>
    );
  }
}
export default Header;


// <button
//   onClick={() => { window.location = 'https://mail.google.com/mail/?view=cm&fs=1&to=marcus@svey.io' }}
// >
// marcus@svey.io
// </button>
// <button
//   onClick={() => { window.location = 'https://github.com/svey' }}
// >
// github.com/svey
// </button>