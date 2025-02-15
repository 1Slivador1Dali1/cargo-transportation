import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small className={styles.footer__text}>
        &copy; 2025 | Все права защищены.
      </small>
    </footer>
  );
}
