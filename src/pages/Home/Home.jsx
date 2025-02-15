import Header from "../../components/Header/Header";
import Hero from "../../blocks/Hero/Hero";
import OurQualitiesBlock from "../../blocks/OurQualitiesBlock/OurQualitiesBlock";
import ProductsBlock from "../../blocks/ProductsBlock/ProductsBlock";
import Seporator from "../../components/Seporator/Seporator";

function Home() {
  return (
    <div>
      <Header />
      <Seporator id="hero" height={40} />
      <Hero />
      <OurQualitiesBlock />
      <Seporator id="products" height={90} />
      <ProductsBlock />
      <h1>Welcome Home page!</h1>
      <p>description</p>
    </div>
  );
}

export default Home;
