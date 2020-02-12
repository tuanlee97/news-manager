import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
              {/* footer */}
<footer>
  <div className="container">
    <p>© Your Website 2019. All Rights Reserved.</p>
    <ul className="list-inline">
      <li className="list-inline-item">
        <a href="/home">Privacy</a>
      </li>
      <li className="list-inline-item">
        <a href="/home">Terms</a>
      </li>
      <li className="list-inline-item">
        <a href="/home">FAQ</a>
      </li>
    </ul>
  </div>
</footer>
{/* end footer */}
  
            </div>
        );
    }
}

export default Footer;