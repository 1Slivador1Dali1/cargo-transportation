import styles from "./index.module.scss";
import PropTypes from "prop-types";

OurQualitiesItem.propTypes = {
  num: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default function OurQualitiesItem({ num, title, text }) {
  return (
    <>
      <li className={styles.item}>
        <h3 className={styles.item__num}>{num}</h3>
        <div className={styles.item__bottom}>
          <span className={styles.item__bottom_title}>{title}</span>
          <p className={styles.item__bottom_text}>{text}</p>
        </div>
      </li>
    </>
  );
}
