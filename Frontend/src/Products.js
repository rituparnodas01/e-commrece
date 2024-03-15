import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useFilterContext } from "./context/filter_context";
import { Button } from "./styles/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const {filter_products} = useFilterContext();
  console.log("filterproducts:",filter_products)
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
      <Link to="/seller">
        <Button>seller panel</Button>
      </Link>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;