import React from "react";
import { Row, Col, Card, Button, Typography } from "antd";
import "./home.css";

const { Title, Text } = Typography;

const products = [
  {
    id: 1,
    name: "Maroon Waffle Knit POLO",
    price: 10,
    image:
      "https://fittedshop.com/cdn/shop/files/1_42d3e4c2-a83c-4fdf-b5e7-df47509ef4b3.jpg?v=1739347987&width=1800",
  },
  {
    id: 2,
    name: "Oatmeal Basic POLO",
    price: 11,
    image:
      "https://fittedshop.com/cdn/shop/files/3_c5d9e5d1-bf02-4448-a8b9-49a6f7079743.jpg?v=1738246923&width=1800",
  },
  {
    id: 3,
    name: "Mint Knitted POLO",
    price: 12,
    image:
      "https://fittedshop.com/cdn/shop/files/1_28e45b30-250e-41bd-8908-d2bc7c6de46b.jpg?v=1738240468&width=1800",
  },
  {
    id: 4,
    name: "Black Knitted POLO",
    price: 13,
    image:
      "https://fittedshop.com/cdn/shop/files/2_41316a32-49ee-4e06-b074-1db0cacc37dd.jpg?v=1716550491&width=1800",
  },
  {
    id: 5,
    name: "Lt Brown Knitted POLO",
    price: 14,
    image:
      "https://fittedshop.com/cdn/shop/files/2_84142b58-c937-4f41-8469-eadacb829685.jpg?v=1738240568&width=1800",
  },
  {
    id: 6,
    name: "Green Forest Knit POLO",
    price: 15,
    image:
      "https://fittedshop.com/cdn/shop/files/wokring.jpg?v=1721474120&width=1800",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <Title level={2} className="page-title">
        Products
      </Title>
      <Row gutter={[16, 16,]}>
        {products.map((product) => (
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
