import PropTypes from "prop-types";
import styles from "./index.module.scss";

ProductsItem.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
};

export default function ProductsItem({ title, background }) {
  return (
    <li
      className={styles.product}
      style={{
        backgroundImage: `url('${background}')`,
      }}
    >
      {title}
    </li>
  );
}
