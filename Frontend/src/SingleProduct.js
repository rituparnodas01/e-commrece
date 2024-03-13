import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import Trusted from "./components/Trusted";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Don't worry!! we are fetching your product.....</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice className="mrp" price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice className="deal" price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Fastest Delivery </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span className="span"> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span className="span"> {id} </span>
              </p>
              <p>
                Brand :<span className="span"> {company} </span>
              </p>
            </div>
            <hr/>
            {stock > 0 && <AddToCart product= {singleProduct}/>}
          </div>
        </div>
      </Container>
      <Trusted/>
    </Wrapper>
  );
};

const Wrapper = styled.section`
 /* Wrapper for SingleProduct component */
 .container{
  margin-top:5rem;
 }
.wrapper {
  padding: 3rem;
}

/* Container for product data */
.product-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}


.product-images-container {
 
  display: flex;
  align-items: center;
}

/* Product data container */
.product-data-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.product-data-price {
  font-weight: bold; /* Make the text bold */
  color: #ff0000; /* Change the color to red */
}

.product-data-real-price {
  font-weight: bold; /* Make the text bold */
  color: green; /* Change the color to green */
}


.product-data-warranty {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 1rem;
}

.product-warranty-data {
  flex: 1; /* Distribute equal space among children */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Warranty icon */
.warranty-icon {
  margin-top:3rem;
  background-color: rgba(220, 220, 220, 0.5);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 0.6rem;
}

/* Warranty text */
.product-warranty-data p {
  font-size: 1rem;
  padding-top: 0.4rem;
  font-weight:bold;
  margin-bottom: 3rem;
}


/* Product price */
.product-price {
  font-weight: bold;
}

/* Real price */
.real-price {
  color: ${({ theme }) => theme.colors.btn};
}

/* Product info */
.product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.8rem;
}

/* Bold span */
.span {
  font-weight: bold;
}
hr {
  max-width:100%;
  width:90%;
  color:red;
  border:0.1rem solid #000;

}
/* Page loading */
.page-loading {
  font-size: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Media query for mobile */
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .wrapper {
    padding: 0 2.4rem;
  }
}

`;

export default SingleProduct;