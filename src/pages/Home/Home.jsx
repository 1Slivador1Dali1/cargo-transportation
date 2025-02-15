import Header from "../../components/Header/Header";
import Hero from "../../blocks/Hero/Hero";
import OurQualitiesBlock from "../../blocks/OurQualitiesBlock/OurQualitiesBlock";
import ProductsBlock from "../../blocks/ProductsBlock/ProductsBlock";
import Seporator from "../../components/Seporator/Seporator";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Seporator id="hero" height={40} />
      <Hero />
      <OurQualitiesBlock />
      <Seporator id="products" height={90} />
      <ProductsBlock />
      <Seporator id="equioment" height={40} />
      {/* <h1>Welcome Home page!</h1>
      <p>description</p> */}
      <Footer />
    </div>
  );
}

export default Home;
