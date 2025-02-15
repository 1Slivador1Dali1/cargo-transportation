import styles from "./index.module.scss";
import ProductsItem from "../../components/ProductsItem/ProductsItem";

const products = [
  {
    id: 1,
    title: "Аренда спецтехники",
    background: "/public/truckCrane.webp",
  },
  {
    id: 2,
    title: "Уборка снега",
    background: "/public/showBlower.webp",
  },
  {
    id: 3,
    title: "Строительные материалы",
    background: "/public/bulkMaterials.webp",
  },
];

export default function ProductsBlock() {
  return (
    <div className={styles.products}>
      <h2 className={styles.products__title}>Наши услуги</h2>
      <ul className={styles.products__list}>
        {products.map((product) => (
          <ProductsItem
            key={product.id}
            title={product.title}
            background={product.background}
          />
        ))}
      </ul>
    </div>
  );
}
