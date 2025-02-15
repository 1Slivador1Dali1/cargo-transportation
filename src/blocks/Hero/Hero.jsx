import styles from "./index.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__left}>
        <h1 className={styles.hero__left_title}>
          Аренда спецтехники | Доставка строительных материалов
        </h1>
        <p className={styles.hero__left_text}>
          Различные виды спецтехники под ваши нужды в г. Солнечногорск,
          Солнечногорский р-он, г. Клин, г. Зеленоград, г. Истра, пос. Поварово,
          Хоругвино, Есипово, Ложки.
        </p>
        <a href="tel:+79166181482" className={styles.hero__left_tel}>
          Заказать услугу
        </a>
      </div>

      <div className={styles.hero__right}>
        <img
          className={styles.hero__right_img}
          src="ivanovec1.webp"
          alt="Вездеход камаз манипулятор"
        />
      </div>
    </div>
  );
}
