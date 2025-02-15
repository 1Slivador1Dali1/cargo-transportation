import { HashLink as Link } from "react-router-hash-link";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

Nav.propTypes = {
  toggleMenu: PropTypes.func,
};

const links = [
  {
    id: 1,
    to: "/#hero",
    text: "Главная",
  },
  {
    id: 2,
    to: "/#products",
    text: "Услуги",
  },
  {
    id: 3,
    to: "/#equipment",
    text: "Оборудование",
  },
  {
    id: 4,
    to: "/#contact",
    text: "Контакты",
  },
];

export default function Nav({ toggleMenu }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={styles.nav__item}
              to={link.to}
              onClick={toggleMenu}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
