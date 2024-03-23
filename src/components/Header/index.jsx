import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="header__nav">
          <li className="header__nav__link">
            <a href="https://github.com/gtcore902/myIP-frontend">
              <FontAwesomeIcon icon={faGithub} size="lg" color="black" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;