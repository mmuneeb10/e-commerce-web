import React from "react";
import { Row, Col, Card, Button, Typography } from "antd";
import { useQuery, useMutation } from "@tanstack/react-query";
import { constants } from "../../constants";
import AppLoader from "../../components/loader";
import axios from "axios";
import "./home.css";

const { Title, Text } = Typography;

const Home = () => {
  const getProductsQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios(`${constants.baseUrl}/products`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  const getMyCart = useQuery({
    queryKey: ["my-cart"],
    queryFn: async () => {
      const res = await axios(`${constants.baseUrl}/carts/my`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  const addToCartMutation = useMutation({
    mutationKey: ["my-cart"],
    mutationFn: async (data) => {
      const res = await axios(`${constants.baseUrl}/carts/add-product`, {
        withCredentials: true,
        method: "POST",
        data,
      });
      return res.data;
    },
  });

  const addToCart = (productId) => async () => {
    const payload = { productId };
    if (getMyCart.data?.id) {
      payload["cartId"] = getMyCart.data.id;
    }
    await addToCartMutation.mutateAsync(payload);
  };

  return (
    <div className="home-container">
      <Title level={2} className="page-title">
        Products
      </Title>

      {getProductsQuery.isLoading ||
        (addToCartMutation.isLoading && <AppLoader />)}

      {!getProductsQuery.isLoading && getProductsQuery.data?.length === 0 && (
        <p>There is no products to show</p>
      )}

      <Row gutter={[16, 16]}>
        {getProductsQuery.data?.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={8}>
            <Card
              cover={<img alt={product.name} src={product.image} />}
              actions={[
                <Button
                  type="primary"
                  block
                  onClick={addToCart(product.id)}
                  disabled={addToCartMutation.isLoading}
                >
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
