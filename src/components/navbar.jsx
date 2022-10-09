import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{this.props.totalCount}</span>
    </nav>
  )
}

export default Navbar
