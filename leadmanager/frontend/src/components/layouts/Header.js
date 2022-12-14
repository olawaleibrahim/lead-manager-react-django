import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm bg-light">
            <div class="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Lead Manager</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Header;
