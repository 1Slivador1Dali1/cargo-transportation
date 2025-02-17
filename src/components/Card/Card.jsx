import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SlArrowRight } from "react-icons/sl";

Card.propTypes = {
  id: PropTypes.number,
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default function Card({ id, imgUrl, imgAlt, name, price }) {
  return (
    <li className={styles.card}>
      <img className={styles.card__img} src={imgUrl} alt={imgAlt} />
      <div className={styles.card__bottom}>
        <div className={styles.card__bottom_text}>
          <h5 className={styles.card__bottom_name}>{name}</h5>
          <h5 className={styles.card__bottom_price}>{price}</h5>
        </div>

        <Link className={styles.card__bottom_link} to={`/card/${id}`}>
          Подробнее <SlArrowRight className={styles.card__bottom_link_arrow} />
        </Link>
      </div>
    </li>
  );
}
