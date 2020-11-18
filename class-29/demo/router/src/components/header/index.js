import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <header>
      <h1> Routing and Composition!</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/foo">Foo</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
