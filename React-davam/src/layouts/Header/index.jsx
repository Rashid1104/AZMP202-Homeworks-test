import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="header-part">
    <h1 className = "header-text">MamaMia</h1>
    <nav>
        <ul className="ul-li">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Foods</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
    </nav>
</div>
    </header>
  )
}

export default Header