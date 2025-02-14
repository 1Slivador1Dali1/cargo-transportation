import styles from "./index.module.scss";
import OurQualitiesItem from "../../components/OurQualitiesItem/OurQualitiesItem";

const listItem = [
  {
    id: 1,
    num: "01",
    title: "Оперативность",
    text: "Мы доставим  заказанную технику на ваш объект точно в срок и без задержек, так как работаем без выходных",
  },
  {
    id: 2,
    num: "02",
    title: "Качество",
    text: "Вся спецтехника отлажена и заправлена, а в случае поломки мы в кратчайшие сроки сделаем замену или ремонт",
  },
  {
    id: 3,
    num: "03",
    title: "Профессионализм",
    text: "Техникой управляют опытные водители и машинисты, которые качественно выполняют свою работу",
  },
  {
    id: 4,
    num: "04",
    title: "Прозрачность",
    text: "Мы официально работаем по договору и принимаем все виды оплаты, в том числе наличный и безналичный расчет",
  },
];

export default function OurQualitiesBlock() {
  return (
    <ul className={styles.list}>
      {listItem.map((item) => (
        <OurQualitiesItem
          key={item.id}
          num={item.num}
          title={item.title}
          text={item.text}
        />
      ))}
    </ul>
  );
}
