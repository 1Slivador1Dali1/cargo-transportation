import { HashLink as Link } from "react-router-hash-link";
import Nav from "./Nav/Nav";
import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

function Logo() {
  return (
    <svg
      width="77"
      height="64"
      viewBox="0 0 77 64"
      fill="#ffc700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7952 47.7824H22.5534C19.5478 47.7824 17.1112 50.2189 17.1112 53.2245V53.2245C17.1112 56.2302 19.5478 58.6667 22.5534 58.6667H65.1413C68.1469 58.6667 70.5834 56.2302 70.5834 53.2245V53.2245C70.5834 50.2189 68.1469 47.7824 65.1413 47.7824H63.8994M23.7952 47.7824V47.7824C23.7952 44.7767 26.2318 42.3402 29.2374 42.3402H58.4572C61.4629 42.3402 63.8994 44.7767 63.8994 47.7824V47.7824M23.7952 47.7824H63.8994"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M33.1529 53.2244C33.1529 55.0278 31.3573 56.4897 29.1424 56.4897C26.9275 56.4897 25.132 55.0278 25.132 53.2244C25.132 51.4211 26.9275 49.9591 29.1424 49.9591C31.3573 49.9591 33.1529 51.4211 33.1529 53.2244Z"
        fill="black"
      />
      <path
        d="M49.1945 53.2244C49.1945 55.0278 47.399 56.4897 45.1841 56.4897C42.9692 56.4897 41.1737 55.0278 41.1737 53.2244C41.1737 51.4211 42.9692 49.9591 45.1841 49.9591C47.399 49.9591 49.1945 51.4211 49.1945 53.2244Z"
        fill="black"
      />
      <path
        d="M65.2362 53.2244C65.2362 55.0278 63.4407 56.4897 61.2258 56.4897C59.0109 56.4897 57.2154 55.0278 57.2154 53.2244C57.2154 51.4211 59.0109 49.9591 61.2258 49.9591C63.4407 49.9591 65.2362 51.4211 65.2362 53.2244Z"
        fill="black"
      />
      <path
        d="M49.1945 42.3401H70.5834V33.6327H49.1945V20.5714H37.1632L34.2626 22.9331M26.4688 43.4286V29.2789L29.0065 27.2127M29.0065 27.2127L13.1007 14.0408L10.4271 31.4558V31.6884H6.41669V5.33334H13.1007L34.2626 22.9331M29.0065 27.2127L34.2626 22.9331M30.4792 31.4558V33.6327H43.8472V23.8367H39.8368L30.4792 31.4558ZM17.1111 32.5442L18.4479 30.3674H21.1215L17.1111 43.4286L6.41669 37.9864V32.5442H17.1111Z"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <Link to="/#hero" className={styles.header__logo}>
          <Logo />
          <p className={styles.header__logo_text}>Доставка | Аренда</p>
        </Link>

        <div className={styles.header__menu_row}>
          <Nav toggleMenu={undefined} />
        </div>

        <div className={styles.header__tel}>
          <span className={styles.header__tel_text}>Нужна помощь?</span>
          <a href="tel:+79166181481" className={styles.header__tel_number}>
            +7 916 618-14-81
          </a>
        </div>

        <button className={styles.burgerBtn} onClick={toggleMenu}>
          {isMenuOpen ? <RiCloseLargeFill /> : <GiHamburgerMenu />}
        </button>

        <div
          className={`${styles.header__menu_burger} ${
            isMenuOpen ? styles.open : ""
          }`}
          ref={menuRef}
        >
          <Nav toggleMenu={toggleMenu} />
        </div>
      </header>
    </>
  );
}
