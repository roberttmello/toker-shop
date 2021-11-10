import styled from "styled-components";
import ProductsItem from "./ProductsItem";
import { popularProducts } from "../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product)=>(
        <ProductsItem key={product.id} product={product}/>
      ))}
    </Container>
  )
}

export default Products;
