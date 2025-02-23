import React from "react";
import { Row, Col, Card, Button, Typography, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import { constants } from "../../constants";
import AppLoader from "../../components/loader";
import "./home.css";

const { Title, Text } = Typography;

const Home = () => {
  const getProductsQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`${constants.baseUrl}/products`);
      return await response.json();
    },
  });

  return (
    <div className="home-container">
      <Title level={2} className="page-title">
        Products
      </Title>

      {getProductsQuery.isLoading && <AppLoader />}

      {!getProductsQuery.isLoading && getProductsQuery.data?.length === 0 && (
        <p>There is no products to show</p>
      )}

      <Row gutter={[16, 16]}>
        {getProductsQuery.data?.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={8}>
            <Card
              cover={<img alt={product.name} src={product.image} />}
              actions={[
                <Button type="primary" block>
                  Add to Cart
                </Button>,
              ]}
            >
              <Card.Meta
                title={product.name}
                description={
                  <>
                    <Text strong>${product.price.toFixed(2)}</Text>
                    <br />
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
