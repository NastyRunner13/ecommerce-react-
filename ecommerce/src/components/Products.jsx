import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f5fbfd;
`;

export default function Products() {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </Container>
  );
}
