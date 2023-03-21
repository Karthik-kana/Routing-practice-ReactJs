import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log()
  return (
    <div className="header-container">
      <div className="images-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="icon"
        />
        <h1 className="heading">Wave</h1>
      </div>
      <ul className="content-container">
        <li>
          <Link className="nav-element" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-element" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-element" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
