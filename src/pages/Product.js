import { Layout } from 'antd';
import { Link } from "react-router-dom";
import products from "../json/products.json";
import ProductDetail from "../components/ProductDetail";
import AppFooter from "../components/Footer";
import AppHeader from "../components/Header";

const { Header, Content, Footer } = Layout;

export default function Product({ match }) {
    const product = products.find(
       x => x.id === match.params.productId
    );
    return (
       <Layout className="container bg-white">
            <Header className="layout-header">
               <AppHeader></AppHeader>
            </Header>
            <Content className="layout-content">
                <ProductDetail product={product} />
            </Content>
            <Footer className="layout-footer">
               <AppFooter></AppFooter>
            </Footer>
       </Layout>
    );
 }