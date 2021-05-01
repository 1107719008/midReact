import { Row, Col } from "antd";
import ProductItem from "./ProductItem";

export default function ProductList({products}) {
  return (
    <Row gutter={[40, 64]}>
    {products.map(product => (
        <Col 
          key={product.id} 
          lg={{ span: 24 }} 
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
  );
}
